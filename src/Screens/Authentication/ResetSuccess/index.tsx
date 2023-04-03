// import { StyleSheet, Text, View } from 'react-native';
import { View, Text, Image } from 'react-native';
import React from 'react'
import { Styles } from './style';
// import { SubmitButton } from '../../../components/FormComponents/SubmitButton';
import { CustomButton } from '../../../components';

const resetMail = 'lorenipsum@gmail.com';

const ResetSuccess = () => {
  return (
    <View style={Styles.parent}>
        <View style={Styles.header}>
          <Image source={require('../../../../assets/images/Logo/ventlyLogo.png')} style={{ width: '100%', height: 50 }} resizeMode='contain' />
        </View>
        <View style={Styles.middle}>
            <Text style={Styles.h2}>Forgot Password</Text>
            <View style={Styles.lockImg}>
               <Image source={require('../../../../assets/images/Logo/ventlyLogo.png')} style={{ width: '100%', height: 50 }} resizeMode='contain' />
            </View>
            <View style={Styles.text}>
               <Text style={Styles.p}>We just sent a password reset email to {resetMail}</Text>
            </View>   
        </View>
        <View style={Styles.bottom}>
            <View style={Styles.button}>
                <CustomButton label='Open Mail App' onPress={(() => console.log('data'))} color='white'/>
            </View>
        </View>
    </View>
  )
}

export default ResetSuccess;
