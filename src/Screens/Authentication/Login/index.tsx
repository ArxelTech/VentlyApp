import React from 'react'
import { Image, ScrollView, StatusBar, Dimensions } from 'react-native'
import { Styles } from './style'
import { Text, View } from '../../../components'
import useForm from '../../../hooks/useForm'
import { loginSchema } from '../../../Services/validation'
import { SubmitButton, TextInput } from '../../../components/FormComponents'
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMutation } from 'react-query'
import HttpClient from '../../../utils/httpService'
import useToast from '../../../hooks/useToast'
import { z } from 'zod'
import { useDetails } from '../../../states/useDetails'
import { useIsLoggedIn } from '../../../states/useLoggedIn'

const { height } = Dimensions.get('screen');

interface IProps {
  navigation?: NativeStackNavigationProp<any>
}

const Login = ({navigation }: IProps) => {
  const { showToast } = useToast()
  const { setAll } = useDetails((state) => state);
  const { setIsLoggedIn } = useIsLoggedIn((state) => state)

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: any) => {
      return HttpClient.post('/user/auth/login', {...data});
    },
    onSuccess: (data: any) => {
      setAll({ refreshToken: data['refreshToken'], accessToken: data['accessToken'], ...data['user'] });
      showToast({ message: data['message'] as string, preset: 'success', position: 'bottom' });
      setIsLoggedIn(true);
    },
    onError: (error: any) => {
      console.log(error);
      showToast({ message: 'An error occured while trying to login', preset: 'failure', position: 'bottom' });
    }
  });

  const handleSubmit = React.useCallback((data: any) => {
    console.log(data);
    mutate(data);
  }, []);
  const {  renderForm } = useForm({
    defaultValues: {
      email: '',
      password: ''
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
              <Text variant='subheader'>Welcome Back</Text>
              <Text variant='xs'>Log in to continue using vent.ly</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <TextInput name='email' label='Email' placeholder='Email@example.com' leftIcon={<Ionicons name='mail' size={25} color='lightgrey' />}  />
            </View>

            <View style={{ marginTop: 10 }}>
              <TextInput name='password' label='Password' placeholder='********' isPassword leftIcon={<Ionicons name='lock-closed' size={25} color='lightgrey' />}  />
            </View>

            <Text variant='xs' marginTop='m' onPress={() => navigation?.navigate('resetPassword') } textAlign='right'>Forgot Password ?</Text>
              <View marginTop='m' />
            <SubmitButton label='submit' isLoading={isLoading} onPress={handleSubmit} />
            
            <View style={{ marginTop: 30 }}>
            <Text variant='xs' marginTop='m' textAlign='center'>Dont have an account ? <Text variant='xs' onPress={()=> navigation?.navigate('signup')} >Sign up</Text></Text>
            </View>
        </View>
       {/* </ScrollView> */}
      </View>
  )
}

export default Login;