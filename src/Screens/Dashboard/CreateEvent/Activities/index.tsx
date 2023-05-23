import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Draft from './Draft';
import { Styles } from '../style';

const index = () => {
  return (
    <View style={Styles.parent}>
      <Draft/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})