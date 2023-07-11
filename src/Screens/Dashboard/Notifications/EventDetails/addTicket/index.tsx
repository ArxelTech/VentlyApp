import { StyleSheet,Image, Pressable } from 'react-native';
import {CustomButton, Text,View} from '../../../../../components';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useForm from '../../../../../hooks/useForm';
import { loginSchema } from '../../../../../Services/validation';
import { SubmitButton, TextInput } from '../../../../../components/FormComponents';
import {Styles} from './style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// const dp = require('/../../../../../../assets/images/jeremy.png')


const addTickets = ({props}:any) => {
  

  const {  renderForm } = useForm({
    defaultValues: {
      vip: '',
      message: ''
    },
    validationSchema: loginSchema,
    });



    return renderForm(
      <View style={Styles.main_cont}>
          <View style={Styles.sub_cont}>
               
          </View>
          <View style={Styles.card}>
                  <View style={Styles.container}>
                      <View style={Styles.title}>
                        <Text variant='subheader' fontWeight={'900'} fontSize={16}>Add More Tickets</Text>
                      </View>    
                      <View style={Styles.form}>
                          <View style={{ marginTop: -15 }}>
                            <TextInput name='vip' label='' rightIcon={<Ionicons name='chevron-down' size={20} color='black' />}  />
                          </View>
                          <View style={{ marginTop: -5}}>
                            <TextInput name='email' label='' leftIcon={<Ionicons name='' size={25} color='lightgrey' />}  />
                          </View>
                      </View> 
                      <View style={Styles.button}>
                        <View style={{width:'40%'}}>
                        </View>
                        <View style={Styles.btn}>
                          <View style={Styles.outlineBtn}>
                            <CustomButton backgroundColor='#ccc'  onPress={props} label='cancel'/>
                          </View>
                          <View style={Styles.fillBtn}>
                            <CustomButton color='white' onPress={()=> window.alert('pop')} label='add'/>
                          </View>
                        </View>
                      </View>     
                  </View>
               </View>
        </View>
        )}

export default addTickets;

