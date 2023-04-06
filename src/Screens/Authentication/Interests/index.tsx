import React from 'react';
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
import AuthButton from '../../../components/Authentication/AuthButton';

const { height } = Dimensions.get('screen');
const Theme = theme;

const Interests = () => {
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
              {/* <Image source={require('../../../../assets/images/Logo/ventlyLogo.png')} resizeMode='contain' style={{ width: '100%', height: 50 }} /> */}
          </View>
          <View>
              <Text style={{fontSize:25,}} variant='header'>Select Your Interests</Text>
              <Text variant='xs'>We've Suggested a couple of users and event categories you might be interested in following. Please follow at least 3 interest categories</Text>    
          </View>
          <View style={Styles.interests}>
          <AuthButton label='Animals & Pets' icon={<Ionicons size={30} color='white' style={{ width: '20%', height: 40 }} />} action={() => console.log('logged')} backgroundColor={theme.colors.brandColor} borderWidth={0} color='white' />
          <AuthButton label='Animals & Pets' icon={<Ionicons size={30} color='white' style={{ width: '20%', height: 40 }} />} action={() => console.log('logged')} backgroundColor={theme.colors.brandColor} borderWidth={0} color='white' />
          </View>
            <View style={{ marginTop: 100 }}>
              <SubmitButton label='Save' onPress={(data) => console.log(data)} color='white'  />
            </View>
          </View>
       {/* </ScrollView> */}
      </View>
  )
}

export default Interests;