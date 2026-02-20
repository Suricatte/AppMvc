import { Button, Text, StyleSheet} from 'react-native';
import { SafeAreaView }  from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import CustomTabBar from '../components/CustomBar';
import QuickCategories from '../components/QuickCategories';
import Gamelist from '../components/Gamelist';
import { ScrollView } from 'react-native-gesture-handler';
 
export default function HomeView({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar navigation={navigation} />
            <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
                <QuickCategories style={styles.quickCategories} />

                <Gamelist title='Ofertas top da semana' isVertical={false} navigation={navigation} />
                <Gamelist title='Ofertas top da semana' isVertical={false} navigation={navigation} />
                <Gamelist title='Ofertas top da semana' isVertical={false} navigation={navigation} />
            </ScrollView>

            <CustomTabBar navigation={navigation} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#32343a',
        flex: 1
    }
});