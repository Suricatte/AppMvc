import { StyleSheet, View, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView }  from 'react-native-safe-area-context';
import HeaderBar from '../components/HeaderBar';
import CustomTabBar from '../components/CustomBar';

const BANNER_IMAGE = '../../assets/adaptive-icon.png';

export default function DetailsView({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBar navigation={navigation}/>

            <ScrollView>
                <View style={styles.bannerContainer}>
                    <Image
                        source={require(BANNER_IMAGE)}
                        resizeMode='contain'
                        style={styles.bannerImagem}
                    />

                    <View style={styles.bannerOverlay}>
                        <Image
                            source={require('../../assets/favicon.png')}
                            resizeMode='contain'
                            style={styles.gameLogo}
                        />
                        <View></View>
                        <View></View>
                    </View>
                </View>

                <Text style={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </ScrollView>

            <CustomTabBar navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#32343a',
        flex: 1
    },
    bannerContainer:{
        height: 220,
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    bannerImagem:{
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    bannerOverlay:{
        flex: 1,
        padding: 15,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    gameLogo:{
        width: 100,
        height: 100,
        alignSelf: 'flex-start',
    },
    description:{
        fontSize: 14,
        color: '#f3f3f3',
        lineHeight: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#1c1c1c'
    }
})