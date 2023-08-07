import {CustomButton, Text, View } from '../../../../components';
import React from 'react';
import useForm from '../../../../hooks/useForm'
import { loginSchema } from '../../../../Services/validation'
import { TextInput } from '../../../../components/FormComponents'
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';


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
                        <View style={{flex: 1.5}}>
                            <Ionicons name='arrow-back-outline' size={20} color='black'/>
                        </View>
                        <View style={{flex: 4}}>     
                            <Text variant='subheader' fontWeight={'700'} fontSize={18}>Event Feed Settings</Text> 
                        </View>  
                </View>
            </View>
            <View style={[Styles.body]}>
               <View style={[Styles.bodyContainer]}>
                    <View>
                       <View>
                            <TextInput name='showOnly' label='Show Only Events In' rightIcon={<Ionicons name='caret-down' size={18} color='#000000' />}  />
                       </View> 
                       <TouchableOpacity> 
                          <View style={{display:'flex', flexDirection:'row', marginTop:40}}>
                            <View style={{width:'50%'}}>
                                <Text variant='subheader' fontSize={14}>Event Categories</Text>
                                <Text variant='xs' fontSize={12}>3 Categories</Text>
                            </View>
                            <View style={{width:'50%', display:'flex', justifyContent:'center', alignItems:'flex-end'}}>
                                <Ionicons name='chevron-forward-outline' size={20} color='#000000' />
                            </View>
                          </View>
                        </TouchableOpacity> 
                        <View style={{marginTop:40}}>
                            <TextInput name='adultEvents' label='Hide Adult Events' rightIcon={<Ionicons name='caret-down' size={18} color='#000000' />}  />   
                        </View>
                       
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