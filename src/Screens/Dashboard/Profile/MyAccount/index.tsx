import React, { useState, useEffect} from 'react';
import { Image, Dimensions, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { Styles } from './style';
import { CustomButton, Text, View } from '../../../../components';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../../../Theme/theme';
import { backgroundColor } from '@shopify/restyle';
// import amir from '../../../../../assets/images/amir.png';

const amir = require('../../../../../assets/images/amir.png');
const verify = require('../../../../../assets/images/verify.png');
const incognito = require('../../../../../assets/Profile_Images/chat.png');

const { height } = Dimensions.get('screen');
const Theme = theme;

const MyAccounts = () => {
  return (
  <SafeAreaView style={Styles.main_container}>
     <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
        <View style={[Styles.pageTitle, {display:'flex', justifyContent:'flex-end', alignItems:'center'}]}>
          <Text variant='header' fontSize={16}>My account</Text>
        </View>
        <View style={[Styles.header, Styles.flexRow]}>
          <View style={[Styles.profileDetails, Styles.flexRow]}>
            <View style={[Styles.displayPhoto]}>
              <ImageBackground style={{height:'100%', width:'100%'}} 
                imageStyle={{borderRadius:5}} resizeMode='cover' source={amir}>  
              </ImageBackground>
            </View>
            <View style={[Styles.userName]}>
              <View style={[Styles.name,{display:'flex', flexDirection:'row'}]}>
                <Text variant='subheader' style={{fontWeight:'800'}} fontSize={15}>Jessica Anderson</Text>
                <View style={[{display:'flex', justifyContent:'flex-end',padding:6}]}>
                  <Image
                    style={{width:10, height:10}}
                    source={verify}
                    />
                </View>
              </View>
              <View style={Styles.gmail}>
                <Text variant='xs' fontSize={10} style={{color:'#B0B1B8'}}>jessicaanderson@gmail.com</Text>
                <Text variant='xs' fontSize={10}style={{color:'#B0B1B8'}} >@jessyanderson</Text>
              </View>
              <View style={[Styles.profileCategory, {display:'flex', flexDirection:'row'}]}>
                  <View style={Styles.flexRow}>
                    <Ionicons name='heart' size={10} color='lightgrey' style={{padding:6}} />
                    <Text variant='subheader' fontSize={12}>Business Profile</Text>
                  </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{width:'100%', height:45, display:'flex',flexDirection:'row',justifyContent:'space-evenly' }}>
          <View style={{ width:'40%',}}>
            <CustomButton label='Edit Profile' onPress={()=>console.log('data')} color='white' />
          </View>
          <View style={{ width:'40%',}}>
            <CustomButton label='View Profile' backgroundColor='#00000029'
              onPress={()=>console.log('data')} />
          </View>
        </View>
        <View style={{backgroundColor:'#cccc', height:500, width:'100%'}}>
         <View style={{display:'flex',alignItems:'center', marginTop:40}}>
            <View style={{backgroundColor:'green', height:'100%', width:'90%'}}>
              {/* Mapping goes here */}
              <View style={{backgroundColor:'red', height:50, display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <View style={[{backgroundColor:'gold', height:50,  width:'20%'},Styles.flexRow]}>
                  <Image 
                    source={incognito}
                    style={{
                      width:35,
                      height:35,
                    }}
                  />
                </View>
                <View style={{backgroundColor:'indigo', height:50, width:'60%'}}>

                </View>
                <View style={{backgroundColor:'gold', height:50, width:'20%'}}>

                </View>
              </View>
            </View>
         </View>
        </View>
      </ScrollView>
  </SafeAreaView>
  )
}

export default MyAccounts;
