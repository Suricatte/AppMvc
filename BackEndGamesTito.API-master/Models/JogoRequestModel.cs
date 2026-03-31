// Importa a biblioteca responsável pelas validações de dados usando Data Annotations
using System.ComponentModel.DataAnnotations;

// Define o namespace onde esta classe está localizada dentro do projeto
namespace BackEndGamesTito.API.Models
{
    // Classe que representa o modelo de dados usado para receber informações de um jogo na API
    // Geralmente utilizado em requisições POST ou PUT (quando o cliente envia dados para a API)
    public class JogoRequestModel
    {
        // Atributo de validação que indica que este campo é obrigatório
        // Se o usuário não enviar esse campo na requisição, a API retornará um erro
        // O ErrorMessage define a mensagem personalizada exibida no erro
        [Required(ErrorMessage = "O campo de Nome do Jogo é obrigatório!")]

        // Propriedade que representa o nome do jogo
        // string.Empty define um valor padrão vazio para evitar valores nulos
        public int JogoId { get; set; }

        // Propriedade que representa o nome do jogo.
        // string.Empty define um valor padrão vazio para evitar que a variável fique nula.
        public string JogoNome { get; set; } = string.Empty;

        // Propriedade que representa a descrição do jogo.
        // O "?" indica que o valor pode ser nulo (campo opcional no banco).
        public string? JogoDescricao { get; set; }

        public string? JogoAvaliacao { get; set; }

        // Propriedade que representa o caminho ou URL da imagem de capa do jogo.
        // Também é opcional, podendo armazenar null caso não exista capa.
        public string? JogoCapa { get; set; }

        public string? JogoGenero { get; set; }

        public DateTime? dataLancamento { get; set; }

        // Propriedade que representa o preço do jogo.
        // float? indica que o valor é numérico decimal e também pode ser nulo.
        public float? JogoPreco { get; set; }
    }
}