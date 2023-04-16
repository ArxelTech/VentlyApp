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
          <View style={Styles.header}>
              <View style={{flex: 2}}>
                 <Ionicons name='arrow-back-outline' size={25} color='black'/>
              </View>
              <View style={{flex: 6}}>     
                 <Text variant='subheader'>Create A New Event</Text> 
              </View>    
          </View>
          <View style={Styles.subheader}>
            <Text variant='xs'>Let's help you get your event ready, What kind of event do you want to create?</Text>
          </View>
          <View>
            </View>
            {/* <View style={{ marginTop: 100 }}>
              <SubmitButton label='Continue' onPress={(data) => console.log(data)} color='white' />
            </View> */}
          </View>
       {/* </ScrollView> */}
      </View>
  )
}

export default Interests;