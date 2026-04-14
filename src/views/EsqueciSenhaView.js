import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EsqueciSenhaView({ navigation }) {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false)

    const handleForgotPassword = async () => {
        console.log({
            email
        })

        const API_URL = 'http://10.0.2.2:5203/api/Account/gorgot-password';

        if (!email) {
            Alert.alert('Atenção', 'Preencha o e-mail')
            return
        }

        try {
            setLoading(true)
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });

            if (response.ok) {
                Alert.alert('Sucesso', 'Código enviado em seu e-mail');
                navigation.navigate('RecuperarSenha')
            }
            else {
                const erroData = await response.json();
                const erroMessage = erroData.message || 'Erro ao criar conta';
                Alert.alert('Erro', erroMessage)
            }
        }
        catch (error) {
            console.log('Erro ao localizar usuário:', error)
            Alert.alert('Erro', 'Ocorreu um erro ao localizar conta')
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Esqueci a senha</Text>
                <Text style={styles.subtitle}>Informe seu e-mail para recuperar sua senha.</Text>

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.link}>Voltar para login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        padding: 24
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
        color: '#333'
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 24,
        textAlign: 'center',
        color: '#666'
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    button: {
        backgroundColor: '#0066cc',
        padding: 15,
        borderRadius: 8,
        allignItems: 'center',
        marginTop: 8
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
    link: {
        marginTop: 16,
        textAlign: 'center',
        color: '#0066cc'
    }
});