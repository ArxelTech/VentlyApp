import {CustomButton, Text, View } from '../../../../components';
import React from 'react';
import useForm from '../../../../hooks/useForm'
import { loginSchema } from '../../../../Services/validation'
import { TextInput } from '../../../../components/FormComponents'
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';


const General = () => {

    const {  renderForm } = useForm({
        defaultValues: {
          name: '',
          email: '',
          username:''
        },
        validationSchema: loginSchema,
      });
  return renderForm(
    <View style={[Styles.parent]}>
        <View style={[Styles.child]}>
            <View style={[Styles.main_cont]}>
                <View style={Styles.header}>
                        <View style={{flex: 1.8}}>
                            <Ionicons name='arrow-back-outline' size={20} color='black'/>
                        </View>
                        <View style={{flex: 4.2}}>     
                            <Text variant='subheader' fontWeight={'700'} fontSize={18}>General Settings</Text> 
                        </View>  
                </View>
            </View>
            <View style={[Styles.body]}>
               <View style={[Styles.bodyContainer]}>
                    <View>
                       <View>
                            <TextInput name='name' label='Name' leftIcon={<Ionicons size={25} color='lightgrey' />}  />
                       </View>   
                        <View style={{marginTop:10}}>
                            <TextInput name='email' label='Email Address' leftIcon={<Ionicons  size={25} color='lightgrey' />}  />   
                        </View>
                        <View style={{display:'flex', flexDirection:'row', marginTop:10}}>
                            <View style={{width:'10%'}}>
                                <Ionicons name='lock-closed' size={20} color='black'/>
                            </View>
                            <View  style={{width:'90%'}}>
                                <Text variant='xs' lineHeight={16} fontSize={12}>
                                For security reasons you can't change your email address manually yet.<Text variant='xs' lineHeight={16} fontSize={12} style={{color:'#E61648'}} > Contact Support</Text> and we'll provide you a form to request a change of email
                                </Text>
                            </View>
                        </View>
                        <View style={{marginTop:10}}>
                            <TextInput name='username' label='Username' leftIcon={<Ionicons size={25} color='lightgrey' />}  />   
                        </View>
                        <Text variant='xs' fontSize={12}>You can only change this once every 14 days</Text>
                        {/* button */}
                        <View style={{height:50, marginTop:30}}>
                            <CustomButton label='update' color='#FFFFFF' backgroundColor='#E61648' onPress={()=>window.alert('roasted')}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default General;