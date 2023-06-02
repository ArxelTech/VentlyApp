import React, {useState} from 'react';
import { Image, Dimensions,} from 'react-native';
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
const hugo = require('../../../../../../assets/images/hugo.png');

const index = (({navigation}: IProps) => {

  return (
      <View style={Styles.main_con}>
        <View style={Styles.container}>
          <View style={[Styles.title, Styles.flexCol]}>
            <Image source={Vlogo} style={Styles.img} resizeMode='contain' />
            <View style={Styles.text}>
              <Text variant='header' textAlign='center' fontSize={20}>Great, Your Event is in your Drafts</Text> 
              <View style={Styles.subtext}>
                <Text variant='xs' textAlign='center' >We've stored your event in your event drafts.
                You can find it in the event section in your account tab</Text>
              </View>
            </View>
          </View>
          <View style={[Styles.image, Styles.flexCol]}>
            <Image source={hugo} style={Styles.hugoImg} resizeMode='cover' />
          </View>
          <View style={[Styles.btn, Styles.flexCol]}>
            <View style={Styles.btnFill}>
              <CustomButton label='Go To Events Section' color='white'  backgroundColor='#E61648' onPress={()=> console.log('data') } />
            </View>
            <View style={Styles.btnTransparent}>
              <CustomButton label='Go To News Feed' color='#E61648' backgroundColor='transparent' onPress={()=> console.log('data') } />
            </View>
          </View>
        </View>
      </View>
  )
})

export default index;