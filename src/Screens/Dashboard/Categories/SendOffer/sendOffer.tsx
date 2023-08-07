import { StyleSheet,Image, Pressable } from 'react-native';
import {CustomButton, Text,View} from '../../../../components';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useForm from '../../../../hooks/useForm';
import { loginSchema } from '../../../../Services/validation';
import { SubmitButton, TextInput } from '../../../../components/FormComponents';
import {Styles} from './style';

const dp = require('../../../../../assets/images/jeremy.png')

const sendOffer = ({props}:any) => {
 
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
                        <Text variant='header' fontSize={22} style={{marginTop:-10}}>$100,000</Text>   
                        <Text variant='xs'style={{marginTop:-10}} >Minimum</Text> 
                    </View>
                    <View style={Styles.offerInput}>
                        <View>
                            <TextInput name='price' label='' placeholder='price' leftIcon={<Ionicons/>}  />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <View style={{height:100, width:'100%', padding:10, borderRadius:10, backgroundColor:'#EFEFEF'}}>
                                <Text variant='xs' style={{color:'#cccc'}}>Additional message</Text> 
                            </View>
                        </View>
                            <View style={{ marginTop: 10, height:45 }}>
                                <CustomButton label='Send Offer' onPress={props} color='white' />
                            </View>
                            <View style={{ marginTop: 10 }}>
                            
                            <Pressable style={{backgroundColor:'#FFFFFF', display:'flex', justifyContent:'center', alignItems:'center'}}
                            >
                                <Text variant='xs' style={{color:'#FF406E'}}>Cancel</Text>
                            </Pressable>
                            </View>
                    </View>
                  </View>
               </View>
            </View>
    
  )
}

export default sendOffer;

const styles = StyleSheet.create({})