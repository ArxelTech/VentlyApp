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
import Accounts from '../Screens/Authentication/Accounts';
import BusinessCategory from '../Screens/Authentication/BusinessCategory';
import AccountSetup from '../Screens/Authentication/AccountSetup';
import Feeds from '../Screens/Dashboard/Feeds';
import CreateEvent from '../Screens/Dashboard/CreateEvent';
import SearchVendors from '../Screens/Dashboard/SearchVendors';
import Profile from '../Screens/Dashboard/Profile';
import Categories from '../Screens/Dashboard/Categories';
import PreviewEvent from '../Screens/Dashboard/PreviewEvent';
import Activities from '../Screens/Dashboard/CreateEvent/Activities';
import EventInformation from '../Screens/Dashboard/EventInformation';
import MyEvents from '../Screens/Dashboard/MyEvents';


const Navigator = createNativeStackNavigator();

const Authentication = () => {
  return (
    <Navigator.Navigator screenOptions={{ headerShown: false }}>
    {/* <Navigator.Screen name='onboarding' component={Onboarding} />
    <Navigator.Screen name=' MyEvents ' component={ MyEvents }/>
    <Navigator.Screen name=' EventInformation ' component={ EventInformation }/>
    <Navigator.Screen name=' Preview ' component={ PreviewEvent }/>
  <Navigator.Screen name=' Activities ' component={ Activities }/>*/}
    <Navigator.Screen name='Profile' component={Profile}/>
    <Navigator.Screen name=' Categories ' component={ Categories}/>
    <Navigator.Screen name=' SearchVendors ' component={ SearchVendors}/>
    <Navigator.Screen name='events' component={CreateEvent} /> 
    
    <Navigator.Screen name='accounts' component={Accounts} /> 
    <Navigator.Screen name='businessCategory' component={ BusinessCategory} />
    <Navigator.Screen name='feeds' component={Feeds} />
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