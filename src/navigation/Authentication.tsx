import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../Screens/Authentication/Onboarding';

const Navigator = createNativeStackNavigator();

const Authentication = () => {
  return (
   <Navigator.Navigator screenOptions={{ headerShown: false }}>
    <Navigator.Screen name='onboarding' component={Onboarding} />
   </Navigator.Navigator>
  )
}

export default Authentication;