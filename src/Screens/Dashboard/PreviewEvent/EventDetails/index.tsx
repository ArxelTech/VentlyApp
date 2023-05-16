import React from 'react';
import { CustomButton, Text, View } from '../../../../components';
import { Styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';

const image = require('../../../../../assets/images/scott.png');
const featuredV = require('../../../../../assets/images/featuredV.png')


const index = () => {
  return (
    <View style={Styles.main_Container}>
       <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
       <View style={Styles.image}>
          <Image style={{height:250, width:'100%', borderRadius:5}}  source={image}/>
       </View>
       <View>
            <View style={Styles.title}>
                <View style={Styles.text}>
                  <Text variant='header' style={{fontSize:14}}>The Xperience Lagos, 6th Edition</Text>
                </View> 
                <View style={Styles.button}>
                    <CustomButton label='Follow' color='white' onPress={()=> console.log('peace')} />
                </View>
            </View>
            <View style={Styles.title}>
                <View style={Styles.icon}>
									<Image source={require('../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                </View>
                <View style={Styles.date}>
                  <Text variant='subheader' style={{fontSize:12}}>Friday 29 October, 1 am</Text>
                </View> 
                <View style={Styles.price}>
                  <Ionicons name='flower-outline' size={20} color='#FC1055'  />
                  <Text variant='xs'>$100 - $300</Text>
                </View>
            </View>
            <View style={Styles.title}>
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
            </View>

        </View>
        <View style={Styles.description}>
          <Text variant='xs' textAlign='justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={Styles.featured}>
          {/* Youtube video componet goes here */}
          <Text variant='header' textAlign='left' style={{fontSize:14}}>featured Video</Text>
           <View style={Styles.ftVideo}>
              <ImageBackground style={{height:200, width:'100%'}} imageStyle={{borderRadius:5}} resizeMode='cover' source={featuredV}>
                   <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                      <Ionicons name='logo-youtube' size={60} color='red'/> 
                   </View>   
              </ImageBackground>
           </View>
        </View>
        <View style={Styles.featured}>
          <Text variant='header' textAlign='left' style={{fontSize:14}}>featured Photos</Text>
           <View>
              
           </View>
        </View>
       </ScrollView>  
    </View>
  )
}

export default index;
