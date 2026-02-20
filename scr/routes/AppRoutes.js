import { createStackNavigator } from "@react-navigation/stack";
 
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import CadastroView from "../views/CadastroView";
import EsqueciSenhaView from "../views/EsqueciSenhaView";
import ProfileView from "../views/ProfileView";
import DetailsView from "../views/DetailsView";
 
const Stack = createStackNavigator();
 
export default function AppRoutes() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={HomeView} options={{title: 'Home'}}/> */}
            <Stack.Screen name="Home" component={HomeView} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginView} options={{title: 'Login'}}/>
            <Stack.Screen name="Cadastro" component={CadastroView} options={{title: 'Cadastro'}}/>
            <Stack.Screen name="EsqueciSenha" component={EsqueciSenhaView} options={{title: 'Esqueci a senha'}}/>
            <Stack.Screen name="Profile" component={ProfileView} options={{title: 'Perfil'}}/>
            <Stack.Screen name="Details" component={DetailsView} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};