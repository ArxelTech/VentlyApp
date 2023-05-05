import { StyleSheet } from 'react-native';
import { Styles } from './style';
import {Text, View } from '../../../components';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Categories = () => {
  return (
    <View style={[Styles.parent]}>
      <View style={[Styles.child]}>
        <View style={[Styles.main_cont]}>
              <View style={Styles.header}>
                        <View style={{flex: 1}}>
                            <Ionicons name='arrow-back-outline' size={25} color='black'/>
                        </View>
                        <View style={{flex: 6}}>     
                            <Text variant='subheader'>Photograhers</Text> 
                        </View> 
                        <View style={{flex: 1}}>
                            <Ionicons name='search' size={25} color='black'/>
                        </View>
              </View>    
        </View>
      <View style={{width: '100%', height: 6, backgroundColor: '#ccc'}}></View>

      </View>
    </View>
  )
}

export default Categories;

const styles = StyleSheet.create({})