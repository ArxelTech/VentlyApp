import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from './BottomTab';


const { Screen, Navigator } = createNativeStackNavigator()

const Dashboard = () => {
  return (
    <Navigator>
        <Screen name='home' component={BottomTab} />
    </Navigator>
  )
}

export default Dashboard;