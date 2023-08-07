import { StyleSheet,Image, Pressable } from 'react-native';
import {CustomButton, Text,View} from '../../../../components';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useForm from '../../../../hooks/useForm';
import { loginSchema } from '../../../../Services/validation';
import { SubmitButton, TextInput } from '../../../../components/FormComponents';
import {Styles} from './style';

const dp = require('../../../../../assets/images/jeremy.png')

const OfferSent = () => {
 
    const {  renderForm } = useForm({
        defaultValues: {
          price: '',
          message: ''
        },
        validationSchema: loginSchema,
    });

  return renderForm(
           <View style={Styles.main_cont}>
               <View style={Styles.sub_cont}>
                    <View style={Styles.userImg}>
                            <Image source={dp}
                            style={{height:100, width:100, zIndex:999 }}
                            />            
                    </View>
               </View>
               <View style={Styles.card}>
                  <View style={{ height:'90%', width:'90%'}}>
                    <View style={Styles.userDtls}>
                        <View style={[Styles.centerElement]}>
                            <Text variant='subheader' fontWeight='700' fontSize={16}>Send Offer to Chidi Michaels</Text>
                            <Text variant='xs' style={{marginTop:-10}} fontSize={12}>Photographer</Text>
                        </View>
                        <View style={{display:'flex', flexDirection:'row'}}>
                            <Ionicons name='star' size={15} color='yellow' /> 
                            <Text variant='xs'>5.0</Text>
                        </View> 
                        {/* <Text variant='header' fontSize={22} style={{marginTop:-10}}>$100,000</Text>   
                        <Text variant='xs'style={{marginTop:-10}} >Minimum</Text>  */}
                    </View>
                    <View style={Styles.offerInput}>
                        <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <Text variant='xs' fontSize={13} style={{color:'#ccc', width:'80%', justifyContent:'center', textAlign:'center'}}>
                                Your offer has been sent to Chidi Michaels Go to Account &#62; Messages to keep track of your offers
                            </Text>
                        </View>
                       
                        <View style={{ marginTop: 15, height:45 }}>
                            <CustomButton label='Continue' onPress={()=>window.alert('offer Sent')} color='white' />
                        </View>
                       
                    </View>
                  </View>
               </View>
            </View>
    
  )
}

export default OfferSent;

