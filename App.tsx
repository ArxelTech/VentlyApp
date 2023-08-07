import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation';
import { useFonts } from 'expo-font';
import React from 'react';


const queryClient = new QueryClient();

export default function App() {
  React.useEffect(() => {
    InitFunction();
  }, []);

  
  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('./assets/fonts/Poppins-Bold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Heebo': require('./assets/fonts/Heebo.ttf'),
    'satoshi-bold': require('./assets/fonts/Satoshi-Bold.otf'),
    'satoshi-medium': require('./assets/fonts/Satoshi-Medium.otf'),
    'satoshi-regular': require('./assets/fonts/Satoshi-Regular.otf'),
    'satoshi-light': require('./assets/fonts/Satoshi-Light.otf'),
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

