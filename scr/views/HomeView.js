// (modelo MVC): view → interface (o que o usuário vê), mostra dados, formulários, tabelas, botões, não decide nada, só exibe
import { Button } from 'react-native';
import { SafeAreaView }  from 'react-native-safe-area-context'; // manter uma area segura dentro da tela, sem que ultrapasse o statusbar
 
export default function HomeView({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
 
            <Button
                title='Home'
                onPress={() => navigation.navigate('Login')}
            />
 
        </SafeAreaView>
    );
};