import React from 'react'
import { Image, ScrollView, StatusBar, Dimensions, ActivityIndicator } from 'react-native'
import { Styles } from './style'
import { Text, View } from '../../../components'
import useForm from '../../../hooks/useForm'
import { loginSchema, verificationSchema } from '../../../Services/validation'
import { SubmitButton, TextInput } from '../../../components/FormComponents'
import { Ionicons } from '@expo/vector-icons'
import { useSignupState } from '../../../states/useSignupState'
import { useMutation } from 'react-query'
import data from '../../../../assets/data'
import HttpClient from '../../../utils/httpService'
import useToast from '../../../hooks/useToast'
import { Colors } from 'react-native-ui-lib'

const { height } = Dimensions.get('screen');

const VerifyEmail = ({ navigation }: any) => {
  const { showToast } = useToast();
  const { email } = useSignupState((state) => state)
  const {  renderForm } = useForm({
    defaultValues: {
      otp: 0,
    },
    validationSchema: verificationSchema,
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: any) => HttpClient.post('/user/auth/verifyemail', data),
    onSuccess: (data: any) => {
        showToast({ message: data.data['message'] as string, preset: 'success', position: 'bottom' });
        navigation.navigate('accountSetup');
    },
    onError: (error: any) => {
        showToast({ message: error, preset: 'failure', position: 'bottom' });
    }
  });

  const { mutate: resendEmail, isLoading: resendLoading } = useMutation({
    mutationFn: (data: any) => HttpClient.post('/user/auth/resend/verification-code', data),
    onSuccess: (data: any) => {
        showToast({ message: data.data['message'] as string, preset: 'success', position: 'bottom' });
    },
    onError: (error: any) => {
        showToast({ message: error, preset: 'failure', position: 'bottom' });
    }
  });
  return renderForm(
      <View backgroundColor='backgroundColor' style={Styles.parent}>
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
              <TextInput name='otp' keyboardType='numeric' label='Verification Code' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
            </View>

            { !resendLoading && <Text variant='xs' marginTop='m' onPress={() => resendEmail({ email }) } textAlign='right'>Resend Code</Text>}
            { resendLoading &&  <ActivityIndicator size='small' color={Colors.brandColor} />
}
            <View style={{ marginTop: 20 }}>
              <SubmitButton label='Verify Email Address' onPress={(data) => mutate({ email, otp: parseInt(data['otp'])})} isLoading={isLoading} color='white' />
            </View>
          </View>
       {/* </ScrollView> */}
      </View>
  )
}

export default VerifyEmail;