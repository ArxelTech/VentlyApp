import React from 'react'
import { Image, ScrollView, StatusBar, Dimensions } from 'react-native'
import { Styles } from './style'
import { Text, View } from '../../../components'
import useForm from '../../../hooks/useForm'
import { loginSchema } from '../../../Services/validation'
import { SubmitButton, TextInput } from '../../../components/FormComponents'
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const { height } = Dimensions.get('screen');

interface IProps {
  navigation?: NativeStackNavigationProp<any>
}

const Login = ({navigation}: IProps) => {
  const {  renderForm } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    validationSchema: loginSchema,
  });
  return renderForm(
      <View style={Styles.parent}>
        <StatusBar barStyle='dark-content' />
       <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ flex: 1, minHeight: height, paddingHorizontal: 20 }}>
        <View style={Styles.iconContainer}>
            <Image source={require('../../../../assets/images/Logo/ventlyLogo.png')} resizeMode='contain' style={{ width: '100%', height: 50 }} />
          </View>
          <View>
            <Text variant='subheader'>Welcome Back</Text>
            <Text variant='xs'>Log in to continue using vent.ly</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput name='email' label='Email' leftIcon={<Ionicons name='mail' size={25} color='lightgrey' />}  />
          </View>

          <View style={{ marginTop: 10 }}>
            <TextInput name='password' label='Password' isPassword leftIcon={<Ionicons name='lock-closed' size={25} color='lightgrey' />}  />
          </View>

          <Text variant='xs' marginTop='m' onPress={() => navigation?.navigate('resetPassword') } textAlign='right'>Forgot Password ?</Text>
          
          <View style={{ marginTop: 30 }}>
          <Text variant='xs' marginTop='m' textAlign='center'>Dont have an account ? Signup</Text>
          </View>
       </ScrollView>
      </View>
  )
}

export default Login;