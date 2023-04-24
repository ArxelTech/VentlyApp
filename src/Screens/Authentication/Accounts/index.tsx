import React, {FC, useState, useEffect} from 'react';
import { Image, ScrollView, StatusBar, Dimensions, Pressable, TouchableOpacity, FlatList } from 'react-native';
import { Styles } from './style';
import { Text, View } from '../../../components';
import useForm from '../../../hooks/useForm';
import { loginSchema } from '../../../Services/validation';
import { SubmitButton, TextInput } from '../../../components/FormComponents';
import { Ionicons } from '@expo/vector-icons';
import { CustomButton } from '../../../components';
import { any } from 'zod';
import theme from '../../../Theme/theme';

const data = require('../../../../assets/data/dropdown.json');

interface Iprops{
  label: string;
}

// Dropdown function

const { height } = Dimensions.get('screen');
const Theme = theme;

const Accounts = () => {

const [visible, setVisible] = useState(false);
const [list, setList] = useState([]);

useEffect(() => {
  setList(list);
  return () => {
    setList([])
  }
}, [])

const toggleDropdown = () => {
  setVisible(!visible);
};

const renderDropdown = () => {
  if (visible) {
    return (
      <View style={Styles.dropdown}>
        
          <FlatList
             data={data}
             renderItem={({item}) => 
              <View style={Styles.listItem}>{item.category}</View>
              }
             keyExtractor={item => item.id}
            />
  
      </View>
    );
  }
}

const unrenderMessage = () => {
  if(!visible) {
    return (
      <View>
        <Text variant='xs' marginTop='m' textAlign='left' fontWeight={'500'}>
              Use this account type if you will just be using Vent.ly for personal use. 
              You can always switch accounts later
          </Text>
      </View>
    )
  }
}

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
            <Text style={{fontSize:30,}} variant='header' textAlign={'center'}>Welcome Mike</Text>
            <Text variant='xs' textAlign={'center'} fontWeight={'500'}>Lets finish setting up your account</Text>  
            <View style={Styles.imgUpload}>
                  <View style={Styles.profileImg}>   
                    <Ionicons name='camera' size={25} color='lightgrey' />              
                  </View>
            </View>  
          </View>
          <View style={Styles.bottom}>
            <Text variant='xs' marginTop='m' textAlign='center' fontWeight={'500'}>Create Username</Text>
            <TextInput name='username' label='' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
            <Text variant='xs' marginTop='m' textAlign='center' fontWeight={'500'}>Select an Account Type</Text>
            <TextInput name='accountType' label='' rightIcon={<Ionicons name='caret-down' onPress={toggleDropdown} size={20} color='black'  />}  /> 
            {/* Dropdown */}
              {renderDropdown()}
            {/* Message tip */}
                {unrenderMessage()}
            <View style={{ marginTop: 100 }}>
              <SubmitButton label='Continue' onPress={(data) => console.log(data)} color='white' />
            </View>
          </View>
        </View>
       {/* </ScrollView> */}
      </View>
  )
}

export default Accounts;