import React, {useState} from 'react';
import { Image, ScrollView, StatusBar, Dimensions, Pressable } from 'react-native';
import { Styles } from './style';
import { Text, View } from '../../../components';
import useForm from '../../../hooks/useForm';
import { loginSchema } from '../../../Services/validation';
import { SubmitButton, TextInput } from '../../../components/FormComponents';
import { Ionicons, } from '@expo/vector-icons';
import { CustomButton } from '../../../components';
import { any } from 'zod';
import theme from '../../../Theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
interface IProps {
  navigation?:  NativeStackNavigationProp<any>
}

const { height } = Dimensions.get('screen');
const Theme = theme;

const AccountSetup = (({navigation}: IProps) => {
  const {  renderForm } = useForm({
    defaultValues: {
      search: '',
      // accountType: ''
    },
    validationSchema: loginSchema,
  });
  return renderForm(
      <View style={Styles.parent}>
        <View style={Styles.header}>
          <Image source={require('../../../../assets/images/Logo/Vlogo.png')} style={{ width: '100%', height: 30 }} resizeMode='contain' />
        </View>
        <View style={Styles.userSetup}>
          <View>
            <Text style={{fontSize:20, marginTop: 0}} variant='header' textAlign={'center'}>Setting Up your account</Text>
          </View>
          <View style={Styles.UserImg}>
            <Image source={require('../../../../assets/images/UserImg.png')} style={{ width: '100%', height: 100 }} resizeMode='contain' /> 
          </View> 
          <View style={Styles.text}>
            <View style={{width: '70%'}}>
              <Text variant='xs' textAlign={'center'} fontWeight={'500'}>We're setting up your account. This should take a moment. Hang on</Text>  
            </View>
          </View>
          </View>
        <View style={Styles.loader}>
        <Ionicons name='logo-ionic' size={30} color='pink' style={{marginTop: 40}}/>
        </View>
      </View>
  )
})

export default AccountSetup;