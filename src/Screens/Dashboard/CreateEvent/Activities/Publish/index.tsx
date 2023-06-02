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
              <Text variant='header' textAlign='center' fontSize={20}>Your Event Has Been Published</Text> 
              
            </View>
          </View>
          <View style={[Styles.image, Styles.flexCol]}>
            <Image source={hugoProductive} style={Styles.hugoImg} resizeMode='cover' />
            <View style={Styles.subtext}>
              <Text variant='xs' textAlign='center' >
              Your event has been published. Don't forget to check your event analytics to keep track of your events. In order
              Now let's setup V-Secure for your tickets
              </Text>
            </View>  
          </View>
          <View style={[Styles.btn, Styles.flexCol]}>
            <View style={Styles.btnFill}>
              <CustomButton label='Setup V-Secure' backgroundColor='#E61648' color='white' onPress={()=> console.log('data') } />
            </View>
          </View>
        </View>
      </View>
  )
})

export default index;