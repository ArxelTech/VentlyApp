import { View, Text } from 'react-native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import Feeds from '../Screens/Dashboard/Feeds';
import Notifications from '../Screens/Dashboard/Notifications';
import CreateEvent from '../Screens/Dashboard/Categories';
import Profile from '../Screens/Dashboard/Profile';
import Settings from '../Screens/Dashboard/Settings';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Navigator >
        <Screen name='feeds' component={Feeds} />
        <Screen name='notifications' component={Notifications} />
        <Screen name='createEvent' component={CreateEvent} />
        <Screen name="profile" component={Profile} />
        <Screen name='settings' component={Settings} />
    </Navigator>
  )
}

export default BottomTab