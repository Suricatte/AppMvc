import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView }  from 'react-native-safe-area-context';

export default function CadastroView({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Criar Conta</Text>

                <TextInput style={styles.input} placeholder="Nome Completo"></TextInput>
                <TextInput style={styles.input} placeholder="E-mail"></TextInput>
                <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}></TextInput>
                <TextInput style={styles.input} placeholder="Confirmar senha" secureTextEntry={true}></TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link}>Já tenho conta</Text>
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