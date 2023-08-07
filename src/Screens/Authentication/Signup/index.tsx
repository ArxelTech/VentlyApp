import React from 'react'
import { Image, ScrollView, StatusBar, Dimensions } from 'react-native'
import { Styles } from './style'
import { Text, View } from '../../../components'
import useForm from '../../../hooks/useForm'
import { loginSchema, signupSchema } from '../../../Services/validation'
import { SubmitButton, TextInput } from '../../../components/FormComponents'
import { Ionicons } from '@expo/vector-icons'
import { useMutation } from 'react-query'
import HttpClient from '../../../utils/httpService'
import useToast from '../../../hooks/useToast'
import { Checkbox, Colors } from 'react-native-ui-lib'
import { useSignupState } from '../../../states/useSignupState'

const { height } = Dimensions.get('screen');

const Signup = ({ navigation }: any) => {

  const [checked, setChecked] = React.useState(false);

  const { showToast } = useToast()
  const { setAll } = useSignupState((state) => state)

  const {  renderForm, values } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: ''
    },
    validationSchema: signupSchema,
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: any) => {
      return HttpClient.post('/user/auth/create', data);
    },
    onSuccess: (data) => {
      showToast({ message: data.data['message'] as string, preset: 'success', position: 'bottom' });
      setAll({ ...values, id:data.data.data.id});
      navigation.navigate('verifyEmail', { name: values['fullname'] })
    },
    onError: (error: any) => {
      showToast({ message: error, preset: 'failure', position: 'bottom' });
    }
  });

  const handleSubmit = React.useCallback((data: any) => {
    if (!checked) {
      showToast({ message: 'You have to accept out term & conditions to continue', preset: 'general', position: 'bottom' });
      return;
    }
    console.log(data);
    mutate(data);
  }, [checked]);
 
  return renderForm(
      <View backgroundColor='backgroundColor' style={Styles.parent}>
        <StatusBar barStyle='dark-content' />
       <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ flex: 1, minHeight: height, paddingHorizontal: 20 }}>
        <View style={Styles.iconContainer}>
            <Image source={require('../../../../assets/images/Logo/ventlyLogo.png')} resizeMode='contain' style={{ width: '100%', height: 50 }} />
          </View>
          <View>
            <Text variant='subheader'>Get Started</Text>
            <Text variant='body'>We're glad to have you aboard signing up is easy</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <TextInput name='fullName' label='Full Name' leftIcon={<Ionicons name='person-outline' size={25} color='lightgrey' />}  />
          </View>

          <View style={{ marginTop: 20 }}>
            <TextInput name='email' label='Email Address' leftIcon={<Ionicons name='mail' size={25} color='lightgrey' />}  />
          </View>

          <View style={{ marginTop: 10 }}>
            <TextInput name='password' label='Password' isPassword leftIcon={<Ionicons name='lock-closed' size={25} color='lightgrey' />}  />
          </View>

          <View style={Styles.terms}>
              <Checkbox value={checked} color={Colors.brandColor} onValueChange={() => setChecked(prev => !prev)} />
            <View style={Styles.text}>
            <Text variant='body' marginTop='m' textAlign='left'>By signing up you agree with our <Text variant='body' style={Styles.meta} >Terms & Conditions</Text> </Text>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <SubmitButton label='Sign up' onPress={handleSubmit} isLoading={isLoading} color='white' />
          </View>

          <View style={{ marginTop: 30 }}>
          <Text variant='body' marginTop='m' textAlign='center'>Already have an account ? Sign in</Text>
          </View>
       </ScrollView>
      </View>
  )
}

export default Signup;