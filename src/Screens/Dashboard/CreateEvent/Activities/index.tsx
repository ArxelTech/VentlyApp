import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import { Styles } from '../style';
import Draft from './Draft';
import Publish from './Publish';
import Ready from './Ready';
import Vsecure from './Vsecure';

const Index = () => {
  return (
    <View style={Styles.parent}>
      {/* <Draft/> */}
      
       {/* <Publish /> */}
       {/* <Ready /> */}
       <Vsecure/>
    </View>
  )
}

export default Index;

const styles = StyleSheet.create({})