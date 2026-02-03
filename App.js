import {  } from 'react-native'; // para chamar os componentes dentro da biblioteca que nesse caso é: 'react-native'
import { SafeAreaProvider }  from 'react-native-safe-area-context';
import 'react-native-gesture-handler'; // biblioteca de gestos
 
import AppRoutes from './scr/routes/AppRoutes';
import { NavigationContainer } from '@react-navigation/native';
 
 
export default function App() {
  return (
    <SafeAreaProvider>
 
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
 
    </SafeAreaProvider>
  );
};