// import { StyleSheet, Text, View } from 'react-native';
import { Image, Linking, Platform } from 'react-native';
import React from 'react'
import { Styles } from './style';
import { CustomButton, View, Text } from '../../../components';
import { Feather } from '@expo/vector-icons'
import { Colors } from 'react-native-ui-lib';
import * as IntentLauncher from 'expo-intent-launcher';
import { openInbox } from "react-native-email-link";



const resetMail = 'lorenipsum@gmail.com';

const ResetSuccess = ({ route }: any) => {

  const handleOpenEmailApp = React.useCallback(async() => {
    if (Platform.OS === 'ios') {
      try {
        await openInbox({ title: "Open mail app" });
      } catch (error) {
        console.error(`OpenEmailbox > iOS Error > ${error}`);
      }
    } 
    if (Platform.OS === 'android') {
      const activityAction = "android.intent.action.MAIN";
    const intentParams = {
      category: "android.intent.category.APP_EMAIL",
    };
    IntentLauncher.startActivityAsync(activityAction, intentParams);

    }
  }, []);
  return (
    <View style={Styles.parent}>
        <View style={Styles.header}>
          <Image source={require('../../../../assets/ventlylogo.png')} style={{ width: '100%', height: 60 }} resizeMode='contain' />
        </View>
        <View style={Styles.middle}>
            <Text variant='subheader' textAlign='center'>Forgot Password</Text>
            <View style={Styles.lockImg}>
                <Feather name="lock" size={100} color={Colors.brandColor} />
            </View>
            <View style={Styles.text}>
               <Text variant='body' textAlign='center'>We just sent a password reset email to {route.params.email}</Text>
            </View>   
        </View>
        <View style={Styles.bottom}>
            <View style={Styles.button}>
                <CustomButton label='Open Mail App' onPress={handleOpenEmailApp} color='white'/>
            </View>
        </View>
    </View>
  )
}

export default ResetSuccess;
