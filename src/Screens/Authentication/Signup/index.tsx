import React from 'react'
import { Image, ScrollView, StatusBar, Dimensions } from 'react-native'
import { Styles } from './style'
import { Text, View } from '../../../components'
import useForm from '../../../hooks/useForm'
import { loginSchema } from '../../../Services/validation'
import { SubmitButton, TextInput } from '../../../components/FormComponents'
import { Ionicons } from '@expo/vector-icons'

const { height } = Dimensions.get('screen');

const Signup = () => {
  const {  renderForm } = useForm({
    defaultValues: {
      fullname: '',
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
            <Text variant='subheader'>Get Started</Text>
            <Text variant='xs'>We're glad to have you aboard signing up is easy</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput name='fullname' label='Full Name' leftIcon={<Ionicons name='person-outline' size={25} color='lightgrey' />}  />
          </View>

          <View style={{ marginTop: 20 }}>
            <TextInput name='email' label='Email Address' leftIcon={<Ionicons name='mail' size={25} color='lightgrey' />}  />
          </View>

          <View style={{ marginTop: 10 }}>
            <TextInput name='password' label='Password' isPassword leftIcon={<Ionicons name='lock-closed' size={25} color='lightgrey' />}  />
          </View>

          <View style={Styles.terms}>
            <View style={Styles.icon}>
              <Ionicons name='checkbox' size={20} color='#FF4471' />
            </View>
            <View style={Styles.text}>
            <Text variant='xs' marginTop='m' textAlign='left'>By signing up you agree with our <Text variant='xs' style={Styles.meta} >Terms & Conditions</Text> </Text>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <SubmitButton label='Sign up' onPress={(data) => console.log(data)} color='white' />
          </View>

          <View style={{ marginTop: 30 }}>
          <Text variant='xs' marginTop='m' textAlign='center'>Already have an account ? Sign in</Text>
          </View>
       </ScrollView>
      </View>
  )
}

export default Signup;