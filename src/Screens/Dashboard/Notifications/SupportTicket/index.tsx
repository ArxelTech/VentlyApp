import { StyleSheet,Image, FlatList, Pressable, ImageBackground} from 'react-native';
import {CustomButton, Text, View } from'../../../../components';
import React from 'react';
import { Styles }  from './style';
import { Ionicons } from '@expo/vector-icons';

const image = require('../../../../../assets/images/featuredV.png');
const circleLogo = require('../../../../../assets/images/Logo/circleLogo.png');
const verify = require('../../../../../assets/images/verify.png');

const SupportTicket = () => {

  return (
    <View style={[Styles.main_cont, Styles.flexRow]}>
        <View style={Styles.container}>
            <View style={[Styles.header, Styles.flexRow]}>
                <View style={{width:'30%'}}>
                    <Ionicons name='arrow-back-outline' size={25} color='black'/>
                </View>
                <View style={{width:'70%'}}>
                    <Text variant='subheader' fontSize={18} fontWeight={'800'}>Support Ticket</Text>
                </View>
            </View>
            <View style={[Styles.flexRow,{height:40, padding:20, paddingBottom:0, paddingTop:10}]}>
                <Text variant='xs' fontSize={13} textAlign='center'>We have finished reviewing the report you sent</Text> 
            </View>
            {/* Event Notice */}
            <View style={Styles.content}>
                <View style={Styles.contentReported}>
                    <View style={[Styles.contentContainer, Styles.flexRow]}>
                        <View style={[Styles.contentName, Styles.flexCol]}>
                            <View>
                                <Text variant='subheader' textAlign={'left'}  fontSize={14} fontWeight='800'>Content Reported</Text>
                                <Text variant='xs' textAlign={'left'} fontSize={12} style={{marginTop:-10}}>Photo From Sandra Travolski</Text>
                            </View>
                        </View>
                        <View style={[Styles.contentImage, Styles.flexCol]}>
                            <Image source={image}
                                resizeMode='contain'
                                style={{width:'90%', height:'90%',borderRadius:6}}
                            />
                        </View>
                    </View> 
                </View>
                <View style={Styles.supportTeam}>
                    <View style={Styles.supportContainer}>
                        <View style={[Styles.supportHeader, Styles.flexRow]}>
                            <View style={{width:'20%'}}>
                                <Image 
                                  source={circleLogo}
                                  style={{width:50, height:50}}
                                  resizeMode='contain'
                                  />
                            </View>
                            <View style={[{width:'50%', height:'70%'}, Styles.flexCol]}>
                                <View style={Styles.flexRow}>
                                  <View style={[{width:'55%', height:'80%'}]}>
                                    <Text variant='subheader' fontSize={12}>
                                        Support Team
                                    </Text>
                                  </View>
                                  <View style={[{width:'45%', display:'flex', justifyContent:'center', alignItems:'flex-start', height:'70%', },]}>
                                    <Image 
                                        source={verify}
                                        style={{width:15, height:15}}
                                        resizeMode='contain'
                                    />
                                  </View>
                                </View>
                                <View style={{width:'100%', marginTop:-10, }}>
                                    <Text variant='xs' fontSize={12}>Ticket ID : 273729297</Text>
                                </View>  
                            </View>
                            <View style={[Styles.flexCol,{width:'20%',height:'100%'}]}>
                                <View style={[{borderWidth:1,width:'90%', borderRadius:6, height:'35%'}, Styles.flexRow]}>
                                    <CustomButton label='closed'
                                     borderRadius={10} backgroundColor='transparent' 
                                     onPress={()=>window.alert('hello')}/>
                                </View>
                            </View>
                        </View> 
                        <View style={[Styles.supportBottom]}>
                            <View style={[{width:'90%', padding:20}]}>
                                <Text variant='xs'>
                                    Thanks for notifying us about this, we have removed the picture and also notified Sandra that the picture has been removed. Thanks for helping us 
                                    keep the community safe for everyone. Keep up the good work
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={[Styles.flexCol,{height:120}]}>
                <Text variant='xs' textAlign='center'>If you feel this has been done in error please contact support at support@vent.ly</Text>
                <Text variant='xs' style={{marginTop:10}} textAlign='center'>Ticket ID : 273729297</Text>
            </View>
        </View>
       
    </View>
  )
}

export default SupportTicket;
