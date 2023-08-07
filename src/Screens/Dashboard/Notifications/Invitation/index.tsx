import { StyleSheet,Image, Pressable } from 'react-native';
import {CustomButton, Text,View} from '../../../../components';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useForm from '../../../../hooks/useForm';
import { loginSchema } from '../../../../Services/validation';
import { SubmitButton, TextInput } from '../../../../components/FormComponents';
import {Styles} from './style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const dp = require('../../../../../assets/images/jeremy.png')


const Invitation = ({navigation}: { navigation: NativeStackNavigationProp<any> }) => {
  
  const [accepted, setInviteAccepted] = React.useState(false);
  const [rejected, setReject] = React.useState(false);

  const {  renderForm } = useForm({
    defaultValues: {
      price: '',
      message: ''
    },
    validationSchema: loginSchema,
    });

  const acceptReq = () => {
    setInviteAccepted(true)
  }
  const rejectReq = () => {
    setReject(true)
  }

    return renderForm(
      <View style={Styles.main_cont}>
          <View style={Styles.sub_cont}>
               <View style={Styles.userImg}>      
                   <Image source={dp}
                     style={{height:55, width:55, zIndex:999,  }}
                   />            
               </View>
               <View style={Styles.userImg1}>      
                   <Image source={dp}
                     style={{height:55, width:55, zIndex:999,  }}
                   />            
               </View>
          </View>
          <View style={Styles.card}>
                  <View style={Styles.container}>
                    <View style={Styles.options}>
                        <View style={Styles.inviteTitle}>
                                <Text variant='xs' fontSize={13} style={{color:'#616161', width:'80%', justifyContent:'center', textAlign:'center'}}>
                                    Johnson Smith invited you to be a co-host for the live event - DevCon 2020
                                </Text>
                        </View>
                            <View style={Styles.eventDtls}>
                              <Pressable onPress={()=>window.alert('nav')}>
                                <Text variant='xs' fontSize={13} style={{color:'#FF406E', width:'80%', justifyContent:'center', textAlign:'center'}}>
                                    View Event Details
                                </Text>
                              </Pressable>
                            </View>
                            <View style={Styles.buttons}>
                            {rejected === !true?
                              <>
                              {accepted === false?
                                <>
                                    <View style={Styles.btn}>
                                      <CustomButton label='Accept' onPress={acceptReq} color='white' />
                                    </View>
                                    <View style={Styles.btnGrey}>  
                                      <Pressable onPress={rejectReq}
                                       style={Styles.flex}>
                                        <Text variant='xs'> Decline</Text>
                                      </Pressable>
                                    </View>
                                  </> 
                                 :
                                accepted === true?
                              <View>
                                  <Pressable style={Styles.outlinedBtn}>
                                      <Ionicons name='lock-closed' size={25} color='lightgrey' />
                                      <Text variant='xs' style={{color:'#616161'}}> You accepted this invite </Text>
                                  </Pressable>
                              </View> :  null
                              } 
                              </> :  
                            rejected === true?
                            <View>
                               <Pressable style={Styles.outlinedBtn}>
                                    <Ionicons name='lock-closed' size={25} color='lightgrey' />
                                   <Text variant='xs' style={{color:'#616161'}}> You declined this invite </Text>
                               </Pressable>
                           </View> : null

                            }


                            </View>  
                    </View>
                  </View>
               </View>
        </View>
        )}

export default Invitation;

