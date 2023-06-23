import { StyleSheet,Text, ImageBackground, FlatList, TouchableOpacity, Image, Pressable} from 'react-native';
import {CustomButton, View } from '../../../../components';
import React, { useState } from 'react';
import {Styles } from './style'

const data = require('../../../../../assets/data/details.json');
const image = require('../../../../../assets/images/jeremy.png');
const verifyImg = require('../../../../../assets/images/verify.png');


const VendorDetails = ({handleMyClick}:any) => {

  return (
    <View style={Styles.parent}>
      <View style={Styles.child}>
        <View style={Styles.card}>
          {/* Profile image session - 40% height */}
          <View style={Styles.profileImg}>
              {/* Background Image */}
            <ImageBackground style={{height:'100%', width:'100%'}} 
                    imageStyle={{borderTopLeftRadius:20, borderTopRightRadius:20}}
                       resizeMode='cover' source={image}>
                      <View style={Styles.blurBG}>
                          <View style={{marginTop:15}}>
                              <View style={{display:'flex', alignItems:'center'}}>
                                  <Image 
                                      source={image}
                                      style={{height:100, width:100, }}
                                  />
                              </View>
                              <View style={Styles.userDtls}>
                              <View style={Styles.name}>
                                  <Text style={{fontSize:18, color:'white'}}>Chidi Michaels</Text>
                                  <View style={{display:'flex',alignItems:'center',
                                                         justifyContent:'center', padding:4}}>
                                    <Image source={verifyImg}
                                      style={{height:10, width:10,}}
                                    />
                                  </View>
                              </View>
                              <Text style={{ color:'white', fontSize:12}}>@Richcruz . Rating: 4.9</Text> 
                            </View>
                             
                          </View>   
                      </View>   
              </ImageBackground>
          </View>
          {/* Events Session - 60% height */}
          <View style={{height:'60%', borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>
              <View style={{height:'30%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                        <View style={{width:'30%',flex:1, alignItems:'center'}}>
                            <Text style={{fontSize:20, fontWeight:'500'}}>455</Text>
                            <Text style={{fontSize:15, fontWeight:'200'}}>Events</Text>
                      </View>
                      <View style={{width:'30%',flex:1, alignItems:'center'}}>
                            <Text style={{fontSize:20, fontWeight:'500'}}>455</Text>
                            <Text style={{fontSize:15, fontWeight:'200'}}>Events</Text>
                      </View>
                      <View style={{width:'30%',flex:1, alignItems:'center'}}>
                            <Text style={{fontSize:20, fontWeight:'500'}}>455</Text>
                            <Text style={{fontSize:15, fontWeight:'200'}}>Events</Text>
                      </View>    
              </View>
              <View style={{ height:'30%', padding:4, flex:1, justifyContent:'flex-start', alignItems:'center'}}>
                  {/* <View> */}
                    <Text style={{fontSize:14, fontWeight:'500'}}>About</Text>
                    <Text style={{fontSize:13, fontWeight:'200', width:'90%', textAlign:'center'}}>
                      I'm a world class photographer based in Lagos, Nigeria. My creative style
                      of photography is second to none. 
                      When I'm not taking pictures, I'm reading or making sweaters
                    </Text>
                  {/* </View> */}
              </View>
            <View style={{height:'35%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center',  borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>
                <View style={{width:'30%', height:'80%', borderRadius:10, padding:5 }}>
                  <ImageBackground style={{ height:'100%', borderTopRightRadius:10, borderTopLeftRadius:10, borderRadius:10 }} resizeMode='cover' source={require('../../../../../assets/images/dtlsChild.png')}>   
                  </ImageBackground>
                </View>
                <View style={{width:'30%', height:'80%', borderRadius:10, padding:5  }}>
                  <ImageBackground style={{ height:'100%', borderTopRightRadius:10, borderTopLeftRadius:10, borderRadius:10 }} resizeMode='cover' source={require('../../../../../assets/images/dtlsMarble.png')}>   
                  </ImageBackground>
                </View>
                <View style={{width:'30%', height:'80%', borderRadius:10, padding:5  }}>
                  <ImageBackground style={{ height:'100%', borderTopRightRadius:10, borderTopLeftRadius:10, borderRadius:10 }} resizeMode='cover' source={require('../../../../../assets/images/dtlsSplash.png')}>   
                  </ImageBackground>
                </View>
            </View>
          </View>
        </View>
        {/* Invite button */}
            <View style={{width:'100%', height:'5%', top:'38%', position:'absolute', zIndex:2, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <View style={{width:'30%',  display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <CustomButton  label='invite'  borderRadius={10} backgroundColor='#FF406E'  color='white'
                              onPress={handleMyClick}
                          />
                  </View>
            </View>

        
        </View>
    </View>
  )
}

export default VendorDetails;

const styles = StyleSheet.create({


})