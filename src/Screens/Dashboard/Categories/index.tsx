import { StyleSheet, FlatList, TouchableOpacity, Image, Pressable} from 'react-native';
import { Styles } from './style';
import {CustomButton, Text, View } from '../../../components';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import VendorDetails from './VendorDetails/VendorDetails';
import SendOffer from './SendOffer/sendOffer';

const DATA = require('../../../../assets/data/vendors.json');

const Categories = () => {

  const handleClick = () => {
    console.log("click handled");
    setInvite(true)
  }

  
  const [invite, setInvite] = useState(false);

//   const SendOffer = () => {
//     console.log('send Offer')
// }
  return (
    <View style={[Styles.parent]}>
      <View style={[Styles.child]}>
        <View style={[Styles.main_cont]}>
              <View style={Styles.header}>
                        <View style={{flex: 1}}>
                            <Ionicons name='arrow-back-outline' size={25} color='black'/>
                        </View>
                        <View style={{flex: 3}}>     
                            <Text variant='subheader'>Photograhers</Text> 
                        </View> 
                        <View style={{flex: 1, flexDirection:'row', justifyContent:'space-evenly'}}>
                            <Ionicons name='grid-outline' size={25} color='black'/>
                            <Ionicons name='search' size={25} color='black'/>
                        </View>
              </View>    
        </View>
        {/* Send Offer dialog */}
        {
            invite === true ? 
            <SendOffer />
          : null
          
        }
        <View style={{width: '100%', height: 6, backgroundColor: '#ccc'}}></View>
        <View style={{width:'100%',height:'100%', flex:1, alignItems:'center', justifyContent:'center'}}>
            <View style={{width:'90%',height:'90%', marginTop:10}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
                    <FlatList
                      data={DATA.slice(0,12)}
                      renderItem={({item}) => 
                      <View style={{height: 120, width:'100%', display: 'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                          <View style={{ flex: 1.2, padding: 5}}>
                            <Image source={item.image} style={{height:100, width:100, borderRadius: 100}}/>
                          </View>
                          <View style={{ flex: 1.8, padding:10}}>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                              <Text variant='header' style={{fontSize: 15}}>
                                {item.user}
                              </Text>
                              <Image source={item.verifyImg} style={{height:15, width:15, borderRadius: 100, marginLeft:5}}/>
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', flex: 1.5, marginTop:-10}}>
                              <Text variant='xs'>{item.handle}</Text>
                              <Text variant='xs'>{item.career}</Text>
                            </View>
                            <Text variant='xs'>{item.cost}</Text>
                          </View>
                          <View style={{flex:1.2}}>
                          
                            <TouchableOpacity style={[Styles.centerElement, 
                            { width: '100%', height: 60, padding: 10, display:'flex', justifyContent:'center', alignItems: 'center', 
                            }]} 
                            >
                            <CustomButton  onPress={() => {console.log('pressed')}} label='invite'  borderRadius={5} backgroundColor='#FF406E'  color='white'
                            />
                          </TouchableOpacity>	
                          </View>
                      </View> }
                      keyExtractor={item => item.id}
                    />		
                    {/* <VendorDetails handleMyClick={handleClick}  /> */}
                </ScrollView>
              </View>
        </View>
        <View style={{display:'flex', alignItems: 'center',justifyContent:'center', height:'10%', width:'100%', backgroundColor:'white', elevation:10, borderTopColor:'grey', borderTopWidth:1, borderStyle:'solid'}}>
          <View style={{ width:'90%', display:'flex',  flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                  <View style={{flex:3, flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                      <Ionicons name='grid-outline' size={20} color='black'/>
                      <Text variant='subheader' style={{fontSize:15}}>Lagos,Nigeria</Text>
                  </View>
                  <View style={{flex:5, alignItems:'flex-end'}}>
                    <Pressable style={{padding:10, width:'80%',
                      borderWidth:2, borderStyle:'solid', borderRadius:10, borderColor:'#FF406E', flex:1, alignItems:'center'}}>
                        <Text variant='xs' style={{color:'#FF406E'}}>Leave Invite Page</Text>
                    </Pressable>
                  </View>     
          </View>
        </View>
      </View>
    </View>
  )
}

export default Categories;

const styles = StyleSheet.create({})