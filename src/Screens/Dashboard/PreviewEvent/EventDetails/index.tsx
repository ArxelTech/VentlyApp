import React from 'react';
import { Text, View } from '../../../../components';
import { Styles } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { ImageBackground } from 'react-native';

const image = require('../../../../../assets/images/jeremybg.png');

const index = () => {
  return (
    <View style={Styles.main_Container}>
       <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1,}} >
       <ImageBackground style={{height:'100%', width:'100%'}} imageStyle={{borderTopLeftRadius:20, borderTopRightRadius:20}} resizeMode='cover' source={image}>
                
      </ImageBackground>

       </ScrollView>  
    </View>
  )
}

export default index;
