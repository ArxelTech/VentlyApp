import React from 'react';
import { Text, View } from '../../../../components';
import { Styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { Image } from 'react-native';

const image = require('../../../../../assets/images/scott.png');

const index = () => {
  return (
    <View style={Styles.main_Container}>
       <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
       <Image style={{height:200, width:'100%'}}  source={image}/>

       </ScrollView>  
    </View>
  )
}

export default index;
