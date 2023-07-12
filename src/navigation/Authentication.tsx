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
import VendorDetails from '../Screens/Dashboard/Categories/VendorDetails/VendorDetails';
import PreviewEvent from '../Screens/Dashboard/PreviewEvent';
import Activities from '../Screens/Dashboard/CreateEvent/Activities';
import EventInformation from '../Screens/Dashboard/EventInformation';
import MyEvents from '../Screens/Dashboard/MyEvents';
import MyProfile from '../Screens/Dashboard/Profile/MyProfile';
import EditProfile from '../Screens/Dashboard/Profile/EditProfile';
import Invite from '../Screens/Dashboard/Profile/MyProfile/Invite';
import EventDetails from '../Screens/Dashboard/Notifications/EventDetails';
import Notice from '../Screens/Dashboard/Notifications/Notice';
import SupportTicket from '../Screens/Dashboard/Notifications/SupportTicket';


const Navigator = createNativeStackNavigator();

const Authentication = () => {
  return (
    <Navigator.Navigator screenOptions={{ headerShown: false }}>
    {/* <Navigator.Screen name='Profile' component={Profile}/> */}
    <Navigator.Screen name='supportTicket' component={SupportTicket}/>
    <Navigator.Screen name='notice' component={Notice}/>
    <Navigator.Screen name='eventDtls' component={ EventDetails}/> 
    <Navigator.Screen name='myProfile' component={MyProfile}/>
    <Navigator.Screen name='editProfile' component={EditProfile}/>
    <Navigator.Screen name='invite' component={Invite}/>
    <Navigator.Screen name='onboarding' component={Onboarding} />
    <Navigator.Screen name=' myEvents ' component={ MyEvents }/>
    <Navigator.Screen name=' eventInformation ' component={ EventInformation }/>
    <Navigator.Screen name=' preview ' component={ PreviewEvent }/>
    <Navigator.Screen name=' activities ' component={ Activities }/>
    <Navigator.Screen name=' categories ' component={ Categories}/>
    <Navigator.Screen name=' vendorDetails ' component={ VendorDetails}/>
    <Navigator.Screen name=' searchVendors ' component={ SearchVendors}/>
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