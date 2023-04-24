import React from 'react'
import { Image, ScrollView, StatusBar, Dimensions } from 'react-native'
import { Styles } from './style'
import { Text, View } from '../../../components'
import useForm from '../../../hooks/useForm'
import { loginSchema } from '../../../Services/validation'
import { SubmitButton, TextInput } from '../../../components/FormComponents'
import { Ionicons } from '@expo/vector-icons'

const { height } = Dimensions.get('screen');

const VerifyEmail = () => {
  const {  renderForm } = useForm({
    defaultValues: {
      Code: 1234,
    },
    validationSchema: loginSchema,
  });
  return renderForm(
      <View style={Styles.parent}>
        <View style={Styles.child}>
          <StatusBar barStyle='dark-content' />
        {/* <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ flex: 1, minHeight: height, paddingHorizontal: 20 }}> */}
          <View style={Styles.iconContainer}>
              <Image source={require('../../../../assets/images/Logo/ventlyLogo.png')} resizeMode='contain' style={{ width: '100%', height: 50 }} />
            </View>
            <View>
              <Text variant='subheader'>Verify Your Email</Text>
              <Text variant='xs'>We sent a verification code to your email address Please enter the code to verify your Vently Account</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <TextInput name='Code' label='Verification Code' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
            </View>

            <Text variant='xs' marginTop='m' onPress={() => console.log('press') } textAlign='right'>Resend Code</Text>

            <View style={{ marginTop: 20 }}>
              <SubmitButton label='Verify Email Address' onPress={(data) => console.log(data)} color='white' />
            </View>
          </View>
       {/* </ScrollView> */}
      </View>
  )
}

export default VerifyEmail;