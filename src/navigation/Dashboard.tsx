import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTab from './BottomTab'
import SearchVendors from '../Screens/Dashboard/SearchVendors';
import Profile from '../Screens/Dashboard/Profile';
import Categories from '../Screens/Dashboard/Categories';
import PreviewEvent from '../Screens/Dashboard/PreviewEvent';
import Activities from '../Screens/Dashboard/CreateEvent/Activities';
import EventInformation from '../Screens/Dashboard/EventInformation';
import MyEvents from '../Screens/Dashboard/MyEvents';
import Feeds from '../Screens/Dashboard/Feeds';
import Accounts from '../Screens/Authentication/Accounts';
import BusinessCategory from '../Screens/Authentication/BusinessCategory';
import CreateEvent from '../Screens/Dashboard/CreateEvent';


const { Screen, Navigator } = createNativeStackNavigator()

const Dashboard = () => {
  return (
    <Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
        <Screen name='home' component={BottomTab} />
        <Screen name=' MyEvents ' component={ MyEvents }/>
        <Screen name=' EventInformation ' component={ EventInformation }/>
        <Screen name=' Preview ' component={ PreviewEvent }/>
        <Screen name=' Activities ' component={ Activities }/>
        <Screen name='Profile' component={Profile}/>
        <Screen name=' Categories ' component={ Categories}/>
        <Screen name=' SearchVendors ' component={ SearchVendors}/>
        <Screen name='createEvent' component={CreateEvent} />
        <Screen name='accounts' component={Accounts} /> 
        <Screen name='businessCategory' component={ BusinessCategory} />
        <Screen name='feeds' component={Feeds} />
    </Navigator>
  )
}

export default Dashboard;