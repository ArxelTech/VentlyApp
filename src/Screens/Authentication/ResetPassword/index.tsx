import React from 'react'
import { Image, ScrollView, StatusBar, Dimensions } from 'react-native'
import { Styles } from './style'
import { Text, View } from '../../../components'
import useForm from '../../../hooks/useForm'
import { loginSchema } from '../../../Services/validation'
import { SubmitButton, TextInput } from '../../../components/FormComponents'
import { Ionicons } from '@expo/vector-icons'

const { height } = Dimensions.get('screen');

const Login = () => {
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
            <Text variant='subheader'>Forgot Password</Text>
            <Text variant='xs'>Please enter the email address associated with your account</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput name='email' label='Email Address' leftIcon={<Ionicons name='mail' size={25} color='lightgrey' />}  />
          </View>

          <View style={{ marginTop: 20 }}>
            <SubmitButton label='Reset Password' onPress={(data) => console.log(data)} color='white' />
          </View>
       </ScrollView>
      </View>
  )
}

export default Login;