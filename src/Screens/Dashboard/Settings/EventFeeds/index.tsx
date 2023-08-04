import {CustomButton, Text, View } from '../../../../components';
import React from 'react';
import useForm from '../../../../hooks/useForm'
import { loginSchema } from '../../../../Services/validation'
import { TextInput } from '../../../../components/FormComponents'
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';


const EventFeed = () => {

    const {  renderForm } = useForm({
        defaultValues: {
          showOnly: '',
        //   email: '',
          adultEvents:''
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
                            <TextInput name='showOnly' label='Show Only Events In' leftIcon={<Ionicons name='caret-down' size={25} color='lightgrey' />}  />
                       </View>   
                        <View style={{display:'flex', flexDirection:'row', marginTop:10}}>
                           <Text variant='subheader' fontSize={14}>Event Categories</Text>
                           <Text variant='xs' fontSize={12}>3 Categories</Text>
                           <Ionicons name='caret-down' size={25} color='lightgrey' />
                        </View>
                        <View style={{marginTop:10}}>
                            <TextInput name='adultEvents' label='Hide Adult Events' leftIcon={<Ionicons name='caret-down' size={25} color='lightgrey' />}  />   
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

export default EventFeed;