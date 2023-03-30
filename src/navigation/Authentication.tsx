import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../Screens/Authentication/Onboarding';
import { View } from 'react-native';
import Login from '../Screens/Authentication/Onboarding/Login/Login';

const Navigator = createNativeStackNavigator();

const Authentication = () => {
  return (
    <><View>
        <Onboarding />
      </View>
      <View>
        <Login />
      </View></>
  )
}

export default Authentication;