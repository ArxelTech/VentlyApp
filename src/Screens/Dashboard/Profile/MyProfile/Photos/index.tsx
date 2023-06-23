import { StyleSheet, } from 'react-native'
import React from 'react';
import {Text, View } from '../../../../../components';

const Photos = ({...Photos}:any) => {
  return (
    <View>
      <View style={{display:'flex', alignItems:'center', justifyContent:'center', padding:30}}>
            <Text variant='header' fontSize={14}>No Photos here</Text>
            <Text variant='subheader' fontSize={12}>Jessica hasn't attended any events on Vently yet</Text>
        </View>
    </View>
  )
}

export default Photos;

const styles = StyleSheet.create({})