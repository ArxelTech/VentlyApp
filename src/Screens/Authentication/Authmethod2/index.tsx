import React from 'react';
import { Image, ScrollView, ImageBackground, StatusBar, Dimensions, StyleSheet } from 'react-native'
import { Styles } from './style';
import { useRoute } from '@react-navigation/native';
import AuthButton from '../../../components/Authentication/AuthButton';
import useTheme from '@react-navigation/native';
import { Text, View } from '../../../components';
import { Theme } from '../../../Theme/theme';
import { Ionicons } from '@expo/vector-icons';
// import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
  navigation?: NativeStackNavigationProp<any>
}


const AuthMethod2 = ({navigation}:IProps) => {
  
  return (
      <View style={Styles.parent}>
        <StatusBar barStyle='light-content' backgroundColor='translucent'/>   
        <View style={Styles.imageBackground}>
            <ImageBackground source={require('../../../../assets/images/signinBG.png')} resizeMode='cover' style={StyleSheet.absoluteFillObject}>
              <View style={Styles.mask}>
                <View style={Styles.iconContainer}>
                    <Image source={require('../../../../assets/images/Logo/whitelogo.png')} resizeMode='contain' style={{ width: '100%', height: 30}} />
                </View>
              </View> 
            </ImageBackground>
        </View>
        <View style={Styles.secondView}>
          <ScrollView style={{flex: 1}} contentContainerStyle={{ paddingTop: 40, paddingHorizontal: 40 }}>
              <Text variant='subheader' textAlign='center'>Create an account</Text>
              <Text variant='body' textAlign='center'>we can't wait to have you onboard</Text>

              <View style={Styles.buttonContainer}>
                    <AuthButton label="Continue with Facebook" icon={<Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../../../../assets/images/facebookicon.png')} />} action={() => {}} backgroundColor='white' borderColor='lightgrey' borderWidth={2} />

                    <View style={{ width: '100%', marginVertical: 20 }}>
                        <AuthButton label="Continue with Google" icon={<Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../../../../assets/images/googleicon.png')} />} action={() => {}} backgroundColor='white' borderColor='lightgrey' borderWidth={2} />
                    </View>

                    <AuthButton label='Sign up with Email' icon={<Ionicons name='mail' size={30} color='white' />} action={() => navigation?.navigate('signup')} backgroundColor={'#FF406E'} borderWidth={0} color='white' />
              </View>

                <Text onPress={() => navigation?.navigate('login')} variant='body' textAlign='center' >Already Have An Account?<Text variant='body' color='brandColor'>Login</Text></Text>
          </ScrollView>
        </View>
      </View>
  )
}


export default AuthMethod2;