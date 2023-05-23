import React, {useState} from 'react';
import { Image, ScrollView, StatusBar, Dimensions, Pressable } from 'react-native';
import { Styles } from './style';
import { Text, View } from '../../../../../components';
import useForm from '../../../../../hooks/useForm';
import { loginSchema } from '../../../../../Services/validation';
import { SubmitButton, TextInput } from '../../../../../components/FormComponents';
import { Ionicons, } from '@expo/vector-icons';
import { CustomButton } from '../../../../../components';
import { any } from 'zod';
import theme from '../../../../../Theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
  navigation?:  NativeStackNavigationProp<any>
}

const { height } = Dimensions.get('screen');
const Theme = theme;
const Vlogo = require('../../../../../../assets/images/Logo/Vlogo.png')

const AccountSetup = (({navigation}: IProps) => {

  return (
      <View style={Styles.main_con}>
        <View>
          <Image source={Vlogo} style={{ width: 30, height: 30 }} resizeMode='contain' />
        </View>
      </View>
  )
})

export default AccountSetup;