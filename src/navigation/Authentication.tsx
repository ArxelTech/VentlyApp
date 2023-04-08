import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../Screens/Authentication/Onboarding';
import AuthMethod from '../Screens/Authentication/Authmethod';
import AuthMethod2 from '../Screens/Authentication/Authmethod2';
import Login from '../Screens/Authentication/Login';
import Signup from '../Screens/Authentication/Signup';
import resetPassword from '../Screens/Authentication/ResetPassword';
import resetSuccess from '../Screens/Authentication/ResetSuccess';
import verifyEmail from '../Screens/Authentication/VerifyEmail';
import Interests from '../Screens/Authentication/Interests';
import Accounts from '../Screens/Authentication/Accounts';
import BusinessCategory from '../Screens/Authentication/BusinessCategory';

const Navigator = createNativeStackNavigator();

const Authentication = () => {
  return (
   <Navigator.Navigator screenOptions={{ headerShown: false }}>
    <Navigator.Screen name='businessCategory' component={ BusinessCategory} />
    <Navigator.Screen name='onboarding' component={Onboarding} />
    <Navigator.Screen name='accounts' component={Accounts} />
    <Navigator.Screen name='interests' component={Interests} />
    <Navigator.Screen name='verifyEmail' component={verifyEmail} />
    <Navigator.Screen name='method' component={AuthMethod} />
    <Navigator.Screen name='method2' component={AuthMethod2} />
    <Navigator.Screen name='login' component={Login} />
    <Navigator.Screen name='signup' component={Signup} />
    <Navigator.Screen name='resetPassword' component={resetPassword} />
    <Navigator.Screen name='resetSuccess' component={resetSuccess} />
   </Navigator.Navigator>
  )
}

export default Authentication;