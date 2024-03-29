import React from 'react';
import { CustomButton, Text, View } from '../../../../components';
import { Styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, ImageBackground, ImageSourcePropType, Pressable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';

const image = require('../../../../../assets/images/vita.png');
const featuredV = require('../../../../../assets/images/featuredV.png');
const hostImg = require('../../../../../assets/images/amanda.png');
const VImg = require('../../../../../assets/images/verify.png');
const map = require('../../../../../assets/images/map.png');
const amir = require('../../../../../assets/images/amir.png');
const kelvin = require('../../../../../assets/images/kelvin.png');
const erik = require('../../../../../assets/images/erik.png');
// const host = require('../../../../../assets/data/hosts.json');


const index = () => {
  return (
    <View style={Styles.main_Container}>
      {/* <TouchableOpacity style={Styles.Icon}>
            <Ionicons name='share-social' size={15} color='black'  />
        </TouchableOpacity> */}
       <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
       <View style={Styles.image}>
          <Image style={{height:200, width:'100%', borderRadius:5}}  source={image}/>
       </View>
       <View>
            <View style={Styles.title}>
                <View style={Styles.text}>
                  <Text variant='header' style={{fontSize:14}}>The 62nd Grammy Awards</Text>
                </View> 
                {/* <View style={Styles.button}>
                    <CustomButton label='Follow' color='white' onPress={()=> console.log('follow')} />
                </View> */}
            </View>
            <View style={[Styles.title, {marginTop:-20}]}>
                {/* <View style={Styles.icon}>
									<Image source={require('../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                </View> */}
                <View style={[Styles.date, {padding:0}]}>
                  <Text variant='subheader' style={{fontSize:12}}>Friday 29 October 2020, 1 - 7 am </Text>
                </View> 
                {/* <View style={Styles.price}>
                  <Ionicons name='flower-outline' size={20} color='#FC1055'  />
                  <Text variant='xs'>$100 - $300</Text>
                </View> */}
            </View>
            {/* <View style={Styles.title}>
                <View style={Styles.icon}>
									<Image source={require('../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                </View>
                <View style={Styles.date}>
                  <Text variant='subheader' style={{fontSize:12}}>La Casa Royale, Bronx, NYC</Text>
                </View> 
                <View style={Styles.price}>
                  <Ionicons name='people' size={20} color='#1EACD1'  />
                  <Text variant='xs'>24k</Text>
                </View>
            </View> */}
        </View>
        <View style={[Styles.description, {marginTop:-20}]}>
          <Text variant='xs' textAlign='justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          
          </Text>
        </View>
        <View style={Styles.featured}>
          {/* Youtube video component goes here */}
          {/* <Text variant='header' textAlign='left' style={{fontSize:14}}>Featured Video</Text>
           <View style={Styles.ftVideo}>
                 <ImageBackground style={{height:200, width:'100%'}} imageStyle={{borderRadius:5}} resizeMode='cover' source={featuredV}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                      <Ionicons name='logo-youtube' size={60} color='red'/> 
                   </View>   
              </ImageBackground>
           </View> */}
        </View>
        <View style={Styles.featured}>
          {/* Image carousel goes here */}
          {/* <Text variant='header' textAlign='left' style={{fontSize:14}}>Featured Photos</Text>
           <View style={Styles.ftImage}> 
              <View style={{width:'45%'}}>
                <ImageBackground style={{height:150, width:'100%'}} imageStyle={{borderRadius:5}} resizeMode='cover' source={amir}>
                </ImageBackground>
              </View>       
              <View style={{width:'45%', paddingLeft:10}}>
                <ImageBackground style={{height:150, width:'100%'}} imageStyle={{borderRadius:5}} resizeMode='cover' source={kelvin}>
                </ImageBackground>
              </View>       
              <View style={{width:'40%', marginLeft:10}}>
                <ImageBackground style={{height:150, width:'100%'}} imageStyle={{borderRadius:5}} resizeMode='cover' source={erik}>
                </ImageBackground>
              </View>       
           </View> */}
        </View>
        <View style={Styles.featured}>
          {/* <Text variant='header' textAlign='left' style={{fontSize:14}}>Location</Text> */}
          {/* <View style={Styles.title}>
                <View>
									<Image source={require('../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                </View>
                <View style={Styles.date}>
                  <Text variant='subheader' style={{fontSize:12}}>La Cassa Royale, Bronx, NYC</Text>
                </View>
          </View>  */}
           <View style={Styles.location}>
              {/* <ImageBackground style={Styles.locationImg} imageStyle={{borderRadius:5}} resizeMode='cover' source={map}>
                  <View style={Styles.locationBG}>
                    <View style={Styles.locationBtn}>
                          <Pressable style={{padding:10 ,
                            borderWidth:2, borderStyle:'solid', borderRadius:10, borderColor:'#FFFFFF', flex:1, alignItems:'center'}}>
                              <Text variant='xs' style={{color:'#FFFFFF'}}>Get Directions On Map</Text>
                          </Pressable>
                    </View>
                  </View>
              </ImageBackground> */}
           </View>
        </View>
        {/* Host */}
        <View style={Styles.featured}>
          <Text variant='header' textAlign='left' style={{fontSize:14}}>Hosted By</Text>

              <View style={Styles.host}>
												<View style={{ flex: 1, padding: 5}}>
													<Image source={hostImg} resizeMode='cover'
													 style={{height:80, width:80, borderRadius: 100}}/>
												</View>
												<View style={Styles.hostDtls}>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', marginTop:10}}>
                              <Text variant='header' style={{fontSize: 14}}>
                                Amanda Suarez
                              </Text>
                              <View style={Styles.Verify}>
                                 <Image source={VImg} style={{height:10, width:10, marginLeft:5}}/>
                              </View> 
                            </View>
                            <View style={{display:'flex', flexDirection:'row', alignItems:'center', flex: 1.5, marginTop:-30}}>
                              <Text variant='xs' fontSize={10}>@michaelcruz</Text>
                              <Text variant='xs' fontSize={10}> photographer</Text>
                            </View>
                            
                          </View>
                          <View style={{flex:1.3}}>
                          
                            <TouchableOpacity style={[Styles.centerElement, 
                            { width: '100%', height: 50, padding: 10, display:'flex', justifyContent:'center', alignItems: 'center', 
                            }]} 
                            >
                            <CustomButton  onPress={() => {console.log('pressed')}} label='follow'  borderRadius={5} backgroundColor='#FF406E'  color='white'
                                                    />
                          </TouchableOpacity>	
											</View>
            </View> 
        </View>
        <View style={Styles.featured}>
          <Text variant='header' textAlign='left' style={{fontSize:14}}>Creatives & Vendors Attending</Text>
          <View style={{padding:5}}>
            <Text variant='subheader' textAlign='left' style={{fontSize:12}}>No creative / vendor has accepted your invitations yet. Once they accept, their profiles would show here
               </Text>
            </View>
          </View>
       </ScrollView>  
    </View>
  )
}

export default index;
