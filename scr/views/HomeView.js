import { Button, Text } from 'react-native';
import { SafeAreaView }  from 'react-native-safe-area-context';
 
export default function HomeView({navigation}) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Button
                title='Login'
                onPress={() => navigation.navigate('Login')}
            />
        </SafeAreaView>
    );
};