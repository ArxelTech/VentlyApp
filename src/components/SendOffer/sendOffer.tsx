import { StyleSheet,Image } from 'react-native';
import {CustomButton, Text,View} from '../../components';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useForm from '../../hooks/useForm';
import { loginSchema } from '../../Services/validation';
import { SubmitButton, TextInput } from '../../components/FormComponents';

const vendorImg = require('../../../assets/images/cardi.png');

interface IOffer {
    vendorImg:string,
    vendName:string,
    proffession:string,
    price:string,
}

const sendOffer = ({vendorImg, vendName, proffession, price}:IOffer) => {
 
    const {  renderForm } = useForm({
        defaultValues: {
          price: '',
          message: ''
        },
        validationSchema: loginSchema,
      });

  return renderForm(
           <View style={{ height:'100%', width:'100%',position:'absolute', zIndex:2, backgroundColor:'#000000c0'}}>
               <View style={{height:'30%', width:'100%', backgroundColor:'#000000c0',opacity:10, zIndex:999}}>
                    <View style={{display:'flex', alignItems:'center', position:'absolute', flexDirection:'row',justifyContent:'center', top:'80%', width:'100%'}}>
                            <Image source={require('../../../assets/images/cardi.png')}
                                            style={{height:100, width:100, zIndex:999 }}
                            />            
                    </View>
               </View>
               <View style={{height:'70%', width:'100%', backgroundColor:'#FFFFFF', borderTopLeftRadius: 20, 
                      borderTopRightRadius: 20, padding:5, display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
                  <View style={{ height:'90%', width:'90%'}}>
                    <View style={{height:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Text variant='subheader'>Send Offer {vendName}</Text>
                        <Text variant='xs'>{proffession}</Text>
                        <View style={{display:'flex', flexDirection:'row'}}>
                            <Ionicons name='star' size={15} color='yellow' /> 
                            <Text variant='xs'>5.0</Text>
                        </View> 
                        <Text variant='header'>{price}</Text>   
                        <Text variant='subheader'>Minimum</Text> 
                    </View>
                    <View style={{height:'50%', }}>
                        <TextInput name='price' label='' placeholder='price' leftIcon={<Ionicons/>}  />
                        <View style={{ marginTop: 10 }}>
                            <View style={{height:100, width:'100%', padding:5, borderRadius:10, backgroundColor:'#EFEFEF'}}>
                                <Text variant='xs'>Additional message</Text> 
                            </View>
                        </View>
                        <View style={{ marginTop: 0 }}>
                            <SubmitButton label='Send Offer' onPress={() => console.log('offer Sent')} color='white' />
                        </View>
                        <View style={{ marginTop: 0 }}>
                            <SubmitButton label='Cancel' onPress={(data) => console.log(data)} backgroundColor='#FFFFFF' color='#FF406E' />
                        </View>
                    </View>
                  </View>
               </View>
            </View>
    
  )
};

export default sendOffer;

const styles = StyleSheet.create({})