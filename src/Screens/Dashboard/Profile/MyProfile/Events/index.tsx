import {useState} from 'react';
import {Image, ImageBackground} from 'react-native'
import React from 'react';
import {Text, View} from'../../../../../components';
import {Styles} from './style';
import {Ionicons} from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const image = require('../../../../../../assets/images/scott.png');

const Events = () => {

 const [event, setIsEvent] = useState(true)
  return (
    <View style={Styles.main_Container}>

        { event === true? 
          <>
            <View style={Styles.container}>
                <View style={Styles.subContainer}>
                        <View style={Styles.image}>
                            <ImageBackground source={image} 
                            style={{
                                width:'100%',
                                height:'100%',
                            }}
                            resizeMode='cover'
                            imageStyle={{borderRadius:10}}
                            ></ImageBackground>
                        </View>
                        <View style={Styles.text}>
                         <Text variant='header' fontSize={10}>The Xperience Lagos, 6th Edition</Text>
                            <View style={[Styles.title, {marginTop:-25}]}>
                                <View style={Styles.icon}>
                                    <Image source={require('../../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                                </View>
                                <View style={Styles.date}>
                                    <Text variant='subheader' style={{fontSize:8}}>Friday, 29 October 2020 | 1 - 7pm</Text>
                                </View> 
                            </View>
                            <View style={[Styles.title, {marginTop:-25}]}>
                                <View style={Styles.icon}>
                                    <Image source={require('../../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                                </View>
                                <View style={Styles.date}>
                                    <Text variant='subheader' style={{fontSize:8}}>La Casa Royale, Bronx, NYC</Text>
                                </View> 
                            </View>
                            <View style={[Styles.title, {marginTop:-25}]}>
                                <View style={Styles.icon}>
                                    <Ionicons name='flower-outline' size={20} color='#FC1055'  />
                                </View>
                                <View style={Styles.date}>
                                    <Text variant='subheader' style={{fontSize:8}}>Tickets from $90 - $400</Text>
                                </View> 
                               
                            </View>
                    </View>
           
                        
                        
                </View>
            </View>
            <View style={Styles.container}>
                <View style={Styles.subContainer}>
                        <View style={Styles.image}>
                            <ImageBackground source={image} 
                            style={{
                                width:'100%',
                                height:'100%',
                            }}
                            resizeMode='cover'
                            imageStyle={{borderRadius:10}}
                            ></ImageBackground>
                        </View>
                        <View style={Styles.text}>
                         <Text variant='header' fontSize={10}>The Xperience Lagos, 6th Edition</Text>
                            <View style={[Styles.title, {marginTop:-25}]}>
                                <View style={Styles.icon}>
                                    <Image source={require('../../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                                </View>
                                <View style={Styles.date}>
                                    <Text variant='subheader' style={{fontSize:8}}>Friday, 29 October 2020 | 1 - 7pm</Text>
                                </View> 
                            </View>
                            <View style={[Styles.title, {marginTop:-25}]}>
                                <View style={Styles.icon}>
                                    <Image source={require('../../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                                </View>
                                <View style={Styles.date}>
                                    <Text variant='subheader' style={{fontSize:8}}>La Casa Royale, Bronx, NYC</Text>
                                </View> 
                            </View>
                            <View style={[Styles.title, {marginTop:-25}]}>
                                <View style={Styles.icon}>
                                    <Ionicons name='flower-outline' size={20} color='#FC1055'  />
                                </View>
                                <View style={Styles.date}>
                                    <Text variant='subheader' style={{fontSize:8}}>Tickets from $90 - $400</Text>
                                </View> 
                               
                            </View>
                    </View>
           
                        
                        
                </View>
            </View>
            <View style={Styles.container}>
                <View style={Styles.subContainer}>
                        <View style={Styles.image}>
                            <ImageBackground source={image} 
                            style={{
                                width:'100%',
                                height:'100%',
                            }}
                            resizeMode='cover'
                            imageStyle={{borderRadius:10}}
                            ></ImageBackground>
                        </View>
                        <View style={Styles.text}>
                         <Text variant='header' fontSize={10}>The Xperience Lagos, 6th Edition</Text>
                            <View style={[Styles.title, {marginTop:-25}]}>
                                <View style={Styles.icon}>
                                    <Image source={require('../../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                                </View>
                                <View style={Styles.date}>
                                    <Text variant='subheader' style={{fontSize:8}}>Friday, 29 October 2020 | 1 - 7pm</Text>
                                </View> 
                            </View>
                            <View style={[Styles.title, {marginTop:-25}]}>
                                <View style={Styles.icon}>
                                    <Image source={require('../../../../../../assets/images/clock.png')} resizeMode='cover'  style={{ width: 20, height: 20 }} />
                                </View>
                                <View style={Styles.date}>
                                    <Text variant='subheader' style={{fontSize:8}}>La Casa Royale, Bronx, NYC</Text>
                                </View> 
                            </View>
                            <View style={[Styles.title, {marginTop:-25}]}>
                                <View style={Styles.icon}>
                                    <Ionicons name='flower-outline' size={20} color='#FC1055'  />
                                </View>
                                <View style={Styles.date}>
                                    <Text variant='subheader' style={{fontSize:8}}>Tickets from $90 - $400</Text>
                                </View> 
                               
                            </View>
                    </View>
           
                        
                        
                </View>
            </View>
        </>
        
            
        : 
        <View style={{display:'flex', alignItems:'center', justifyContent:'center', padding:30}}>
            <Text variant='header' fontSize={14}>No Events Here</Text>
            <Text variant='subheader' fontSize={12}>Jessica hasn't attended any events on Vently yet</Text>
        </View>
        }
      
    </View>
  )
}

export default Events;

