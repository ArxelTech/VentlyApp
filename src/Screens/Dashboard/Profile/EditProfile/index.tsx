import { TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CustomButton, Text, View} from '../../../../components';
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { SubmitButton, TextInput } from '../../../../components/FormComponents';
import useForm from '../../../../hooks/useForm';
import { loginSchema } from '../../../../Services/validation';

const dp = require('../../../../../assets/images/divineEffiong.jpg');
const data = require('../../../../../assets/data/dropdown.json');

const UserSuspended  = () => {
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
              <View style={Styles.listItem}>
                <Text variant='xs'>{item.category}</Text>
                </View>
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
        <Text variant='header' fontSize={12}>Price Information</Text>
        <Text variant='xs' marginTop='m' textAlign='left' fontSize={12} lineHeight={15} fontWeight={'500'}>
        In this section you can set the minimum - maximum hiring fees you accept for events. Make sure you set something realistic to increase your chances of getting hired
        </Text>
      </View>
    )
  }
}


  const {  renderForm } = useForm({
    defaultValues: {
      name: '',
      email:'',
      userName: '',
      accountType: '',
      businessType: '',
    },
    validationSchema: loginSchema,
  });
  return renderForm(
    <View style={Styles.main_cont}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, flexDirection:'column'}} >
        <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <View style={Styles.child}>
            {/* header */}
            <View>
              <View style={Styles.header}>
                  <View style={Styles.nav}>
                      <View style={{width:'40%'}}>
                          <TouchableOpacity>
                            <Ionicons name="arrow-back" size={20} />
                          </TouchableOpacity>
                      </View>
                      <View style={{width:'60%'}}>
                          <Text variant='header' fontSize={18}>Edit Profile</Text>
                      </View>
                  </View>
                  <View style={Styles.displayPhoto}>
                    <View style={{width:'35%', height:'100%', backgroundColor:'red', borderRadius:6}}>
                      <Image source={dp}
                      style={{width:'100%', height:'100%', borderRadius:6}}
                      resizeMode='cover'
                      />
                      <View style={Styles.edit}>
                        <Ionicons name='camera' size={25} color='lightgrey' />
                      </View>
                    </View>
                  </View>
              </View>
              <View style={Styles.editInput}>
                  <View style={{ marginTop: 20, width:290 }}>
                      <TextInput name='name' label='Name' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
                      <View style={{ marginTop: 10 }}>
                        <TextInput name='email' label='Email Address' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
                      </View>
                      <View style={{ marginTop: 10, display:'flex',flexDirection:'row' }}>
                        <View style={{width:'10%'}}>
                          <Ionicons name='lock-closed' size={20} color='#000000' />
                        </View>
                        <View  style={{width:'90%'}}>
                          <Text variant='xs' lineHeight={18} fontSize={10}>
                            For security reasons you can't change your email address manually yet. 
                            <Text variant='xs' style={{color:'#E61648'}} lineHeight={18} fontSize={10}>Contact Support</Text> and we'll provide you a form to request a change of email
                          </Text>
                        </View>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <TextInput name='username' label='username' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
                      </View>
                        <Text variant='xs' fontSize={10}>You can only change this once every 14 days</Text> 
                      <View>
                        <Text variant='header' fontSize={12}>Bio</Text>
                        <View style={{ marginTop: 10 }}>
                          <TextInput name='username' label='' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
                        </View>
                      </View>
                      <View style={Styles.bottom}>
                      <Text variant='xs' marginTop='m' fontWeight={'500'}>Account Type</Text>
                      <TextInput name='accountType' label='' rightIcon={<Ionicons name='caret-down' onPress={toggleDropdown} size={15} color='black'  />}  /> 
                      <Text variant='xs' marginTop='m'  fontWeight={'500'}>Business Type</Text>
                      <TextInput name='BusinessType' label='' rightIcon={<Ionicons name='caret-down' onPress={toggleDropdown} size={15} color='black'  />}  /> 
                      {/* Dropdown */}
                        {renderDropdown()}
                      {/* Message tip */}
                          {unrenderMessage()}
                          <View style={{ marginTop: 10 }}>
                        <TextInput name='username' label='minimum' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
                      </View>
                      <View style={{ marginTop: 5,paddingBottom:20 }}>
                        <SubmitButton label='Update' onPress={(data) => console.log(data)} color='white' />
                      </View>
                    </View>


                  </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default UserSuspended;
