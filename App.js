import { SafeAreaProvider }  from'react-native-safe-area-context';
import AppRoutes from './scr/routes/AppRoutes';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
 
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};