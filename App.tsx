import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation';
import { useFonts } from 'expo-font';
import { QueryClientProvider, QueryClient } from 'react-query';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('./assets/fonts/Poppins-Bold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Heebo': require('./assets/fonts/Heebo.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
   <NavigationContainer>
     <QueryClientProvider client={queryClient}>
        <Navigation />
     </QueryClientProvider>
   </NavigationContainer>
  );
}

