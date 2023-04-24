import React, {useState, useEffect} from 'react';
import { Image, ScrollView, StatusBar, Dimensions, Pressable } from 'react-native';
import { Styles } from './style';
import { Text, View } from '../../../components';
import useForm from '../../../hooks/useForm';
import { loginSchema } from '../../../Services/validation';
import { SubmitButton, TextInput } from '../../../components/FormComponents';
import { Ionicons } from '@expo/vector-icons';
import { CustomButton } from '../../../components';
import { any } from 'zod';
import theme from '../../../Theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
  navigation?:  NativeStackNavigationProp<any>
}



const { height } = Dimensions.get('screen');
const Theme = theme;

const BusinessCategory = (({navigation}: IProps) => {
  const {  renderForm } = useForm({
    defaultValues: {
      search: '',
      // accountType: ''
    },
    validationSchema: loginSchema,
  });
  return renderForm(
      <View style={Styles.parent}>
        <View style={Styles.child}>
          <StatusBar barStyle='dark-content' />
        {/* <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ flex: 1, minHeight: height, paddingHorizontal: 20 }}> */}
            <View style={Styles.header}>
              <Text style={{fontSize:30,}} variant='header' textAlign={'left'}>Business Category</Text>
              <Text variant='xs' textAlign={'left'} fontWeight={'500'}>Please Select the business type that best describes what you do</Text>  
              <View style={{ marginTop: 20 }}>
              <TextInput name='search' label='' leftIcon={<Ionicons name='search' size={25} color='lightgrey' />}  />
              </View>
            </View>
            <View style={Styles.buttonContainer} paddingHorizontal='m'>
          {/* <CustomButton label='Go back' onPress={() => console.log('data')} backgroundColor='#ff0000' /> */}
            <View style={{ flex: 1, height: 60, marginRight: 20 }}>
              <CustomButton label='Go Back' onPress={() => navigation?.navigate('method', {type: 'login'})} color='black' borderRadius={10} backgroundColor='#EEEEEE' />
            </View>

            <View style={{ flex: 1, height: 60 }}>
              <CustomButton label='Save' onPress={() => navigation?.navigate('method', {type: 'signup'})} color='white' borderRadius={10} />
            </View>
        </View>
            
        </View>
       {/* </ScrollView> */}
      </View>
  )
})

export default BusinessCategory;