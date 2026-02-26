import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView }  from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons';
import HeaderBar from '../components/HeaderBar';
import CustomTabBar from '../components/CustomBar'; 

export default function HelpSupportView({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Perguntas frequentes</Text>

                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>Problemas com compra?</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="#fff" style={styles.btnIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>Solicitar reembolso?</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="#fff" style={styles.btnIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>Postar seu jogo?</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="#fff" style={styles.btnIcon} />
                </TouchableOpacity>

                <Text style={styles.contactSubText}>Ainda precisa de ajuda?</Text>

                <TouchableOpacity style={styles.contactBtn}>
                    <View style={styles.contactView}>
                        <Text style={styles.contactText}>Fale conosco</Text>
                        <Ionicons name="chatbubble-ellipses" size={18} color="#fff" style={styles.contactIcon} />
                    </View>
                </TouchableOpacity>
                

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#32343a',
        flex: 1
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ff8c00',
        marginBottom: 30,
        paddingHorizontal: 15
    },
    btnContainer:{
        backgroundColor: '#565a64ff',
        borderRadius: 10,
        paddingLeft: 25,
        marginHorizontal: 15,
        marginBottom: 25,
        height: 70,
        justifyContent: 'center',
        shadowColor:'#000000ff',
        shadowOffset:{width:6, height:4},
        shadowOpacity:1,
        shadowRadius:5,
        elevation:8
    },
    btnText:{
        color: '#fff',
        fontSize: 20
    },
    btnIcon:{
        position: 'absolute',
        right: 15,
        top: 25
    },
    contactSubText:{
        fontSize: 14,
        color: '#ff8c00',
        textAlign: 'center',
        marginTop: 30,
    },
    contactBtn:{
        backgroundColor: '#ff8c00',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 20,
        width: '50%',
        alignSelf: 'center'
    },
    contactView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contactIcon:{
        marginTop:3,
        marginLeft: 5
    }
});