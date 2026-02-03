// foi criado uma pasta para todas as rotas entre paginas
import { createStackNavigator } from "@react-navigation/stack"; // biblioteca de navegacao
 
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
 
const Stack = createStackNavigator();
 
export default function AppRoutes() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={HomeView} options={{title: 'Home'}}/> */}
            <Stack.Screen name="Home" component={HomeView} options={{headerShown: false}}/>
 
            {/* <Stack.Screen name="Login" component={LoginView} options={{title: 'Login'}}/> */}
            <Stack.Screen name="Login" component={LoginView} options={{headerShown: false}}/>
       
        </Stack.Navigator>
    );
};