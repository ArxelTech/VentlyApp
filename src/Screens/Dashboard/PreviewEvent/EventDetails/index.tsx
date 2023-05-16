import React from 'react';
import { CustomButton, Text, View } from '../../../../components';
import { Styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';

const image = require('../../../../../assets/images/scott.png');


const index = () => {
  return (
    <View style={Styles.main_Container}>
       <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
       <View>
          <Image style={{height:250, width:'100%'}}  source={image}/>
       </View>
       <View style={Styles.details}>
            <View style={Styles.title}>
                <View style={Styles.text}>
                  <Text variant='header' style={{fontSize:16}}>The Xperience Lagos, 6th Edition</Text>
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
                  <Text variant='subheader' style={{fontSize:14}}>Friday 29 October, 1 am</Text>
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
                  <Text variant='subheader' style={{fontSize:14}}>La Casa Royale, Bronx, NYC</Text>
                </View> 
                <View style={Styles.price}>
                  <Ionicons name='people' size={20} color='#1EACD1'  />
                  <Text variant='xs'>24k</Text>
                </View>
            </View>

        </View>
        <View style={Styles.description}>
          <Text variant='xs'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
        <View style={Styles.featured}>
          <Text variant='header' textAlign='left' style={{fontSize:14}}>featured Video</Text>
           <View>
              <ImageBackground style={{height:'100%', width:'100%'}} imageStyle={{borderTopLeftRadius:20, borderTopRightRadius:20}} resizeMode='cover' source={image}>
                      
              </ImageBackground>
           </View>
        </View>
       </ScrollView>  
    </View>
  )
}

export default index;
