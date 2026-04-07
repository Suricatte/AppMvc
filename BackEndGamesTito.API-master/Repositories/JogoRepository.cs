using BackEndGamesTito.API.Data.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BackEndGamesTito.API.Repositories
{
    public class JogoRepository
    {
        private readonly string _connectionString;

        public JogoRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection")
                ?? throw new ArgumentNullException("String de conexão 'DefaultConnection' não encontrada");
        }

        public async Task<List<Jogo>> GetAllJogosAsync()
        {
            var jogos = new List<Jogo>();

            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var commandText = @"SELECT JogoId, JogoNome, JogoDescricao, JogoAvaliacao, JogoCapa, JogoGenero, dataLancamento, JogoPreco FROM dbo.Jogos";

                using (var command = new SqlCommand(commandText, connection))
                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        jogos.Add(MapJogoFromReader(reader));
                    }
                }
            }
            return jogos;
        }

        public async Task<Jogo?> GetJogoByIdAsync(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var commandText = @"SELECT JogoId, JogoNome, JogoDescricao, JogoAvaliacao, JogoCapa, JogoGenero, dataLancamento, JogoPreco 
                                    FROM dbo.Jogos WHERE JogoId = @JogoId";

                using (var command = new SqlCommand(commandText, connection))
                {
                    command.Parameters.AddWithValue("@JogoId", id);

                    using (var reader = await command.ExecuteReaderAsync())
                    {
                        if (await reader.ReadAsync())
                        {
                            return MapJogoFromReader(reader);
                        }
                    }
                }
            }
            return null;
        }

        // --- MÉTODOS DE ESCRITA (INSERT/UPDATE) ---

        public async Task CreateJogoAsync(Jogo jogo)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var commandText = @"INSERT INTO dbo.Jogos (JogoNome, JogoDescricao, JogoCapa, JogoPreco) 
                                    VALUES (@JogoNome, @JogoDescricao, @JogoCapa, @JogoPreco)";

                using (var command = new SqlCommand(commandText, connection))
                {
                    AddParameters(command, jogo);
                    await command.ExecuteNonQueryAsync();
                }
            }
        }

        public async Task<bool> UpdateJogoAsync(int id, Jogo jogo)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var commandText = @"UPDATE dbo.Jogos 
                                    SET JogoNome = @JogoNome, 
                                        JogoDescricao = @JogoDescricao, 
                                        JogoCapa = @JogoCapa, 
                                        JogoPreco = @JogoPreco 
                                    WHERE JogoId = @JogoId";

                using (var command = new SqlCommand(commandText, connection))
                {
                    command.Parameters.AddWithValue("@JogoId", id);
                    AddParameters(command, jogo);

                    int rowsAffected = await command.ExecuteNonQueryAsync();
                    return rowsAffected > 0;
                }
            }
        }

        public async Task<bool> DeleteJogoAsync(int id)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                await connection.OpenAsync();
                var commandText = @"DELETE FROM dbo.Jogos WHERE JogoId = @JogoId";

                using (var command = new SqlCommand(commandText, connection))
                {
                    command.Parameters.AddWithValue("@JogoId", id);
                    int rowsAffected = await command.ExecuteNonQueryAsync();
                    return rowsAffected > 0;
                }
            }
        }

        // --- MÉTODOS AUXILIARES (Dica de Senior: Evita repetição de código) ---

        private Jogo MapJogoFromReader(SqlDataReader reader)
        {
            return new Jogo
            {
                JogoId = reader.GetInt32(reader.GetOrdinal("JogoId")),
                JogoNome = reader.GetString(reader.GetOrdinal("JogoNome")),
                
                // Uso do GetValue + ToString() para evitar o erro de InvalidCastException no JogoAvaliacao
                JogoAvaliacao = reader.IsDBNull(reader.GetOrdinal("JogoAvaliacao")) 
                    ? null 
                    : reader.GetValue(reader.GetOrdinal("JogoAvaliacao")).ToString(),

                JogoDescricao = reader.IsDBNull(reader.GetOrdinal("JogoDescricao")) ? null : reader.GetString(reader.GetOrdinal("JogoDescricao")),
                JogoCapa = reader.IsDBNull(reader.GetOrdinal("JogoCapa")) ? null : reader.GetString(reader.GetOrdinal("JogoCapa")),
                JogoGenero = reader.IsDBNull(reader.GetOrdinal("JogoGenero")) ? null : reader.GetString(reader.GetOrdinal("JogoGenero")),
                dataLancamento = reader.IsDBNull(reader.GetOrdinal("dataLancamento")) ? null : reader.GetDateTime(reader.GetOrdinal("dataLancamento")),
                
                // Ajuste no Preço: Se no banco for Float/Double, usamos GetDouble ou Convert
                JogoPreco = reader.IsDBNull(reader.GetOrdinal("JogoPreco")) 
                    ? 0 
                    : Convert.ToSingle(reader.GetValue(reader.GetOrdinal("JogoPreco")))
            };
        }

        private void AddParameters(SqlCommand command, Jogo jogo)
        {
            command.Parameters.AddWithValue("@JogoNome", jogo.JogoNome ?? (object)DBNull.Value);
            command.Parameters.AddWithValue("@JogoDescricao", jogo.JogoDescricao ?? (object)DBNull.Value);
            command.Parameters.AddWithValue("@JogoCapa", jogo.JogoCapa ?? (object)DBNull.Value);
            command.Parameters.AddWithValue("@JogoPreco", jogo.JogoPreco);
        }
    }
}