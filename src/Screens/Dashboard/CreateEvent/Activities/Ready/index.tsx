import React, {useState} from 'react';
import { Image, ScrollView, StatusBar, Dimensions, Pressable } from 'react-native';
import { Styles } from './style';
import { Text, View, CustomButton } from '../../../../../components';
import theme from '../../../../../Theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IProps {
  navigation?:  NativeStackNavigationProp<any>
}

const { height } = Dimensions.get('screen');
const Theme = theme;
const Vlogo = require('../../../../../../assets/images/Logo/Vlogo.png');
const hugoProductive = require('../../../../../../assets/images/hugoProductive.png');

const index = (({navigation}: IProps) => {

  return (
      <View style={Styles.main_con}>
        <View style={Styles.container}>
          <View style={[Styles.title, Styles.flexCol]}>
            <Image source={Vlogo} style={Styles.img} resizeMode='contain' />
            <View style={Styles.text}>
              <Text variant='header' textAlign='center' fontSize={20}>Your Event is Ready</Text> 
            </View>
            <View style={Styles.subtext}>
              <Text variant='xs' fontSize={12} textAlign='center' >
              Now you can now start inviting people to your event. You'll be able to manage your event and track 
              important event analytics on the event section
              </Text>
            </View>  
          </View>
          
          <View style={[Styles.share, Styles.flexCol]}>
            <View style={Styles.sharebtn}>
              <View style={Styles.btnBorder}>
                <CustomButton label='Share Event QR Code' backgroundColor='transparent'  onPress={()=> console.log('data') } />
              </View>
            </View>
            <View style={Styles.sharebtn}>
              <View style={Styles.btnBorder}>
                <CustomButton label='Share Event Link'  backgroundColor='transparent' onPress={()=> console.log('data') } />
              </View>
            </View>
            <View style={Styles.sharebtn}>
              <View style={Styles.btnBorder}>
                <CustomButton label='Share Event USSD Code'  backgroundColor='transparent' onPress={()=> console.log('data') } />
              </View>
            </View>
          </View>
          <View style={[Styles.btn, Styles.flexCol]}>
            <View style={Styles.btnFill}>
              <CustomButton label='Go To Event Management' backgroundColor='#E61648' color='white' onPress={()=> console.log('data') } />
            </View>
            <View style={Styles.btnTransparent}>
              <CustomButton label='View This Event' color='#E61648' backgroundColor='transparent' onPress={()=> console.log('data') } />
            </View>
          </View>
        </View>
      </View>
  )
})

export default index;