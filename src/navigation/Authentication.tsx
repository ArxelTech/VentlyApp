import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../Screens/Authentication/Onboarding';
import AuthMethod from '../Screens/Authentication/Authmethod';
import Login from '../Screens/Authentication/Login';
import Signup from '../Screens/Authentication/Signup';

const Navigator = createNativeStackNavigator();

const Authentication = () => {
  return (
   <Navigator.Navigator screenOptions={{ headerShown: false }}>
    <Navigator.Screen name='onboarding' component={Onboarding} />
    <Navigator.Screen name='method' component={AuthMethod} />
    <Navigator.Screen name='login' component={Login} />
    <Navigator.Screen name='signup' component={Signup} />
   </Navigator.Navigator>
  )
}

export default Authentication;