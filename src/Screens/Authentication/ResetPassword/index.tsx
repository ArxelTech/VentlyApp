import React from 'react'
import { Image, ScrollView, StatusBar, Dimensions } from 'react-native'
import { Styles } from './style'
import { Text, View } from '../../../components'
import useForm from '../../../hooks/useForm'
import { loginSchema, passwordResetSchema } from '../../../Services/validation'
import { SubmitButton, TextInput } from '../../../components/FormComponents'
import { Ionicons } from '@expo/vector-icons'
import { useMutation } from 'react-query'
import HttpClient from '../../../utils/httpService'
import useToast from '../../../hooks/useToast'

const ResetPassword = ({ navigation }: any) => {
  const { showToast } = useToast();

  const {  renderForm, values } = useForm({
    defaultValues: {
      email: '',
    },
    validationSchema: passwordResetSchema,
  });
  const { mutate, isLoading } = useMutation({
    mutationFn: (data: any) => HttpClient.post('/user/auth/passwordreset', {...data}),
    onSuccess: (data: any) => {
      showToast({ message: data.data['message'] as string, preset: 'success', position: 'bottom' });
      navigation.navigate('resetsuccess', { email: values['email'] });
    },
    onError: (error: string) => {
      showToast({ message: error, preset: 'failure', position: 'bottom' });
    }
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
              <Text variant='subheader'>Forgot Password</Text>
              <Text variant='xs'>Please enter the email address associated with your account</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <TextInput name='email' label='Email Address' leftIcon={<Ionicons name='mail' size={25} color='lightgrey' />}  />
            </View>

            <View style={{ marginTop: 20 }}>
              <SubmitButton label='Reset Password' onPress={(data) => mutate(data)} isLoading={isLoading} color='white' />
            </View>
          </View>
       {/* </ScrollView> */}
      </View>
  )
}

export default ResetPassword;