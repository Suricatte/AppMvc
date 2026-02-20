import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const TABS = [
    {id: '1', name: 'Início', icon: 'home', isCurrent: true, route: 'Home'},
    {id: '2', name: 'Categoria', icon: 'list', isCurrent: true, route: ''},
    {id: '3', name: 'Desejos', icon: 'heart', isCurrent: true, route: ''},
    {id: '4', name: 'Pedidos', icon: 'mail', isCurrent: true, route: ''},
    {id: '5', name: 'Perfil', icon: 'person', isCurrent: true, route: 'Login'},
]

const TabItem= ({item, navigation}) => {
    return(
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('Login')}>
            <Ionicons name={`${item.icon}-outline`} size={24} color={'#888'} />
            <Text style={styles.tabText}>{item.name}</Text>
        </TouchableOpacity>
    );
}

export default function CustomTabBar({navigation}){
    return(
        <View style={styles.container}>
            {TABS.map(tab => (
                <TabItem key={tab.id} item={tab} navigation={navigation} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 65,
    // height: 110,
    backgroundColor: '#0a0a0a',
    borderTopWidth: 1,
    borderTopColor: '#1c1c1c',
    paddingBottom: 5,
 
    position: 'absolute',
    // bottom: 40,
    bottom: 40,
    left: 10,
    right: 10,
    zIndex: 1000,
    // paddingBottom: 20,
   
    borderRadius:100,
 
    //sombra
    //sombra IOS
    //cor da sombra
    shadowColor:'#fff',
 
    //direcao da sombra
    //width: 0 = não desloca lateralmente
    //heigth: 4 = deslocar para baixo
    shadowOffset:{width:6, height:4},
 
    //transparencia da sombra 0 a 1
    shadowOpacity:0.3,
 
    //quanto maior, mais borrada fica a sombra
     shadowRadius:4,
 
 
 
   //define a intencidade da sombra
    //quanto maior o valor, mais forte a mais distante
     elevation:8
 
  },
    tabButton:{
        alignItems:'center',
        justifyContent: 'center',
        flex:1
    },
    tabText:{
        fontSize:10,
        color:'#888',
        marginTop:4
    }
});