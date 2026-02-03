import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView }  from 'react-native-safe-area-context';

export default function LoginView() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Login</Text>
                <TextInput placeholder="E-mail"></TextInput>
                <TextInput placeholder="Senha"></TextInput>
                <ToucuableOpacity>
                    <Text>Entrar</Text>
                </ToucuableOpacity>
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
    }
});