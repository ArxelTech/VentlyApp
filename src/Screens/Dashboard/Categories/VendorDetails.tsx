import { StyleSheet,Text, ImageBackground, FlatList, TouchableOpacity, Image, Pressable} from 'react-native';
import {CustomButton, View } from '../../../components';
import React, { useState } from 'react';

const data = require('../../../../assets/data/details.json');
const image = require('../../../../assets/images/jeremybg.png');
const verifyImg = require('../../../../assets/images/verify.png');


const VendorDetails = () => {
   const [invite, SetInvite] = useState(false);

   const SendOffer = () => {
         SetInvite(true)
   }

  return (
    <View>
      <View style={{height: 580, borderRadius:20, elevation:20, borderStyle:'solid', borderWidth:1, borderColor:'grey'}}>
        <View style={{height:'70%', borderWidth:2, borderStyle:'solid', borderColor:'black', borderTopRightRadius:10, borderTopLeftRadius:10,}}>
            <ImageBackground style={{ height:'80%', borderTopRightRadius:10, borderTopLeftRadius:10, }} resizeMode='cover' source={image}>
                    <View style={{display:'flex',height:'100%',  borderTopRightRadius:10, borderTopLeftRadius:10, justifyContent:'flex-start', alignItems:'center', backgroundColor:'#000000c0', }}>
                        <View style={{marginTop:30}}>
                            <View style={{display:'flex', alignItems:'center'}}>
                                <Image source={require('../../../../assets/images/Jeremy.png')}
                                    style={{height:120, width:120}}
                                />
                            </View>
                           
                            <View style={{display:'flex', flexDirection:'row'}}>
                                <Text style={{fontSize:20, color:'white'}}>Chidi Michaels</Text>
                                <Image source={verifyImg}
                                style={{height:15, width:15}}
                                />
                            </View>
                            <Text style={{ color:'white'}}>@Richcruz . Rating: 4.9</Text> 
                        </View>   
                    </View>   
            </ImageBackground>
        </View>
           <View style={{width:'100%', height:'6%', top:'40%', position:'absolute', zIndex:2, display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <View style={{width:'30%',  display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        <CustomButton  label='invite'  borderRadius={10} backgroundColor='#FF406E'  color='white'
                            onPress={SendOffer}
                />
                </View>
           </View>
           {
            invite == true ? 
            <View style={{backgroundColor:'red', height:'50%', position:'absolute'}}>
                <Text>
                    Magnek
                </Text>
            </View> : null
           }
        <View style={{backgroundColor:'white', borderBottomRightRadius:10, borderBottomLeftRadius:10,height:'50%', marginTop:-160}}>
           <View style={{ height:'30%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                   {/* <FlatList
                     data={data}
                     renderItem={({item}) => 
                        <View style={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%',height:'100%'}}>
                            <View style={{display:'flex', flexDirection:'row'}}>
                                <Text style={{fontSize:20, fontWeight:'500'}}>{item.number}</Text>
                                <Text style={{fontSize:15, fontWeight:'200'}}>{item.Events}</Text>
                            </View>
                        </View> 
                    } 
                    keyExtractor={item => item.id}                    
                   /> */}
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
           <View style={{ height:'40%', flex:1, justifyContent:'flex-start', alignItems:'center'}}>
              {/* <View> */}
                <Text style={{fontSize:15, fontWeight:'500'}}>About</Text>
                <Text style={{fontSize:15, fontWeight:'200', width:'90%', textAlign:'center'}}>
                I'm a world class photographer based in Lagos, Nigeria. My creative style
                of photography is second to none. 
                When I'm not taking pictures, I'm reading or making sweaters
                </Text>
              {/* </View> */}
           </View>
           <View style={{height:'30%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center',  borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>
              <View style={{width:'30%', height:'80%', borderRadius:10, padding:5 }}>
                <ImageBackground style={{ height:'100%', borderTopRightRadius:10, borderTopLeftRadius:10, borderRadius:10 }} resizeMode='cover' source={require('../../../../assets/images/dtlsChild.png')}>   
                </ImageBackground>
              </View>
              <View style={{width:'30%', height:'80%', borderRadius:10, padding:5  }}>
                <ImageBackground style={{ height:'100%', borderTopRightRadius:10, borderTopLeftRadius:10, borderRadius:10 }} resizeMode='cover' source={require('../../../../assets/images/dtlsMarble.png')}>   
                </ImageBackground>
              </View>
              <View style={{width:'30%', height:'80%', borderRadius:10, padding:5  }}>
                <ImageBackground style={{ height:'100%', borderTopRightRadius:10, borderTopLeftRadius:10, borderRadius:10 }} resizeMode='cover' source={require('../../../../assets/images/dtlsSplash.png')}>   
                </ImageBackground>
              </View>
           </View>
        </View>
      </View>
    </View>
  )
}

export default VendorDetails

const styles = StyleSheet.create({


})