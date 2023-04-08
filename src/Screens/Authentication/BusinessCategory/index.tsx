import React, {useState} from 'react';
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

const { height } = Dimensions.get('screen');
const Theme = theme;

const BusinessCategory = () => {
  const {  renderForm } = useForm({
    defaultValues: {
      username: '',
      accountType: ''
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
            {/* <View style={Styles.imgUpload}>
                  <View style={Styles.profileImg}>   
                    <Ionicons name='camera' size={25} color='lightgrey' />              
                  </View>
            </View>   */}
          </View>
          <View style={Styles.bottom}>
            {/* <Text variant='xs' marginTop='m' textAlign='center' fontWeight={'500'}>Create Username</Text>
            <TextInput name='username' label='' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
            <Text variant='xs' marginTop='m' textAlign='center' fontWeight={'500'}>Select an Account Type</Text>
            <TextInput name='accountType' label='' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
            <Text variant='xs' marginTop='m' textAlign='left' fontWeight={'500'}>Use this account type if you will just be using Vent.ly for personal use. You can always switch accounts later</Text> */}
          </View>
            <View style={{ marginTop: 100 }}>
              <SubmitButton label='Continue' onPress={(data) => console.log(data)} color='white' />
            </View>
          </View>
       {/* </ScrollView> */}
      </View>
  )
}

export default BusinessCategory;