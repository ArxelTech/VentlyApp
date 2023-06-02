import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../Screens/Authentication/Onboarding';
import AuthMethod from '../Screens/Authentication/Authmethod';
import Login from '../Screens/Authentication/Login';
import Signup from '../Screens/Authentication/Signup';
import resetPassword from '../Screens/Authentication/ResetPassword';
import resetSuccess from '../Screens/Authentication/ResetSuccess';
import verifyEmail from '../Screens/Authentication/VerifyEmail';
import Interests from '../Screens/Authentication/Interests';
import AccountSetup from '../Screens/Authentication/AccountSetup';

// import CreateEvent from '../Screens/Dashboard/CreateEvent/Index';


const Navigator = createNativeStackNavigator();

const Authentication = () => {
  return (
    
    <Navigator.Navigator screenOptions={{ headerShown: false }}>
    <Navigator.Screen name='onboarding' component={Onboarding} />
    <Navigator.Screen name='resetSuccess' component={resetSuccess} />
    <Navigator.Screen name='accountSetup' component={ AccountSetup  } />
    <Navigator.Screen name='interests' component={Interests} />
    <Navigator.Screen name='verifyEmail' component={verifyEmail} />
    <Navigator.Screen name='method' component={AuthMethod} />
    <Navigator.Screen name='signup' component={Signup} />
    <Navigator.Screen name='login' component={Login} />
    <Navigator.Screen name='resetPassword' component={resetPassword} />
   </Navigator.Navigator>
  )
}

export default Authentication;