import { SafeAreaView, ScrollView, Image, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import { View,Text, CustomButton } from '../../../../components';
import {Styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import {FlatList} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileEvents from '../MyProfile/Events/'
import ProfilePhotos from '../MyProfile/Photos';

const dp = require('../../../../../assets/images/divineEffiong2.png');
const verify = require('../../../../../assets/images/verify.png');
const image = require('../../../../../assets/images/scott.png');
const featuredV = require('../../../../../assets/images/featuredV.png');
const hostImg = require('../../../../../assets/images/amanda.png');
const VImg = require('../../../../../assets/images/verify.png');
const map = require('../../../../../assets/images/map.png');
const amir = require('../../../../../assets/images/amir.png');
const kelvin = require('../../../../../assets/images/kelvin.png');
const erik = require('../../../../../assets/images/erik.png');

// interface Iprops {
//     title:string,
//     numberOf:number
// }

function Photos(){
    return (
      <View>
        <ProfilePhotos/>
      </View>
    );
  }

  
  function Events (){
    return (
        <View>
            <ProfileEvents/>
        </View>
    );
  }
  
const details  = [
    {
        title:'Events',
        numberOf: 448
    },
    {
        title:'Followers',
        numberOf: '23.6m'
    },
    {
        title:'Following',
        numberOf: 102
    },
]

const Tab = createMaterialTopTabNavigator();
const MyProfile = () => {
  const [miniModal, setMiniModal] = React.useState(false);

  const toggleMiniModal= () => setMiniModal(previousState => !previousState);
  return (
    <SafeAreaView style={Styles.main_container}>
     <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
        <View style={Styles.header}>
            { miniModal == true &&
                <View style={Styles.MiniModal}>
                <View>
                    <Text variant='subheader' fontSize={14}>Invite</Text>
                    <Text variant='subheader' fontSize={14}>Share</Text>
                    <Text variant='subheader'fontSize={14}>Report</Text>
                </View>
            </View>
            }
            {/* MiniModal */}
            
            <View style={Styles.nav}>
                <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
                <Ionicons name='ellipsis-vertical' size={20}  color="#FFFFFF"/>
            </View>
            <Image
                source={dp}
                style={{
                width: '100%',
                height: '100%'
            }}
            resizeMode='cover'
            />
            <View style={Styles.footer}>
              <View style={Styles.footerContainer}>
                <View style={Styles.userDtls}>
                    <View  style={Styles.name}>
                        <Text variant='subheader' fontSize={18} style={{fontWeight:'800', color:'#FFFFFF'}}>Jessica Anderson</Text>
                        <View style={Styles.verifyContainer}>
                            <Image
                                style={{width:10, height:10}}
                                source={verify}
                                />
                        </View>
                    </View>
                        <Text variant='subheader' fontSize={9} style={{marginTop:-8, color:'#808080'}}>@jessyanderson | Photographer</Text>
                        <Text variant='subheader' fontSize={9} style={{marginTop:-18, color:'#808080'}}>Port Harcourt, Nigeria</Text>
                </View>
                <View style={Styles.followBtn}>
                    <View style={Styles.outline}>
                        <CustomButton label='Follow' color='#FFFFFF' backgroundColor='transparent' onPress={()=> console.log('hii')}/>
                    </View>
                    <View style={Styles.fill}> 
                        <Pressable  
                                onPress={toggleMiniModal}>
                             <Ionicons name='ellipsis-horizontal' size={20}  color="#000000"/>
                        </Pressable>
                    </View>
                </View>
              </View>
            </View>
            
        </View>
        <View style={Styles.profileDtls}>
            <FlatList
                data={details}
                horizontal
                renderItem={({item}) => 
                <View style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <View>
                        <View style={{display:'flex', justifyContent:'center', alignItems:'center', width:120}}>
                            <Text variant='header' fontSize={16}>{item.numberOf}</Text>
                            <Text variant='xs' fontSize={12} style={{color:'#ccc', marginTop:-13}}>{item.title}</Text>
                        </View>
                    </View>
                </View> 
            }								
                keyExtractor={item => item.title}
            />
        </View>
        <View style={Styles.bio}>
            <View style={{width:'90%'}}>
                <View style={{paddingBottom:5}}>
                    <Text variant='header' fontSize={16}>Bio</Text>
                </View>
               
                <Text variant='xs' fontSize={12} style={{ marginTop:-13}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed do eiusmod tempor aliquip ex ea..
                </Text>
            </View>
        </View> 
        <View style={Styles.featuredPhotos}>
          {/* Image carousel goes here */}
          <Text variant='header' textAlign='left' style={{fontSize:14}}>Featured Photos</Text>
           <View style={Styles.ftImage}> 
              <View style={{width:'40%'}}>
                <ImageBackground style={{height:150, width:'100%'}} imageStyle={{borderRadius:20}} resizeMode='cover' source={amir}>
                </ImageBackground>
              </View>       
              <View style={{width:'40%', paddingLeft:10}}>
                <ImageBackground style={{height:150, width:'100%'}} imageStyle={{borderRadius:20}} resizeMode='cover' source={kelvin}>
                </ImageBackground>
              </View>       
              <View style={{width:'40%', marginLeft:10}}>
                <ImageBackground style={{height:150, width:'100%'}} imageStyle={{borderRadius:20}} resizeMode='cover' source={erik}>
                </ImageBackground>
              </View>       
           </View>
        </View> 
        <View style={Styles.tab}>
        <View style={Styles.tabContainer}>
              <Tab.Navigator
                screenOptions={{
                tabBarActiveTintColor:'#FF406E',
                tabBarInactiveTintColor:'#ccc',
                tabBarIndicatorStyle: {
                  backgroundColor: '#FF406E',
                  height: 4,
                  width: 140,
                  marginLeft:20,
                  display:'flex',
                },
                tabBarScrollEnabled: false,
                tabBarLabelStyle: {fontSize: 14, fontWeight:'700' , textTransform: 'none'},
                tabBarItemStyle: { width: 180,   },
                tabBarStyle: {
                  height: 60,
                  width: '100%',
                  paddingTop:10,
                  paddingBottom:10,
                  backgroundColor: '#FFFFFF',
                },
              }}
              >
        <Tab.Screen name="Photos" component={Photos} />
        <Tab.Screen name="Events" component={Events} />
      </Tab.Navigator>
    </View>

        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default MyProfile;

