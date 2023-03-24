import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('./assets/fonts/Poppins-Bold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Heebo': require('./assets/fonts/Heebo.ttf'),
  });
  return (
   <NavigationContainer>
     <Navigation />
   </NavigationContainer>
  );
}

