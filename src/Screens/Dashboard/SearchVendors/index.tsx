import { StyleSheet,Image, FlatList} from 'react-native';
import {Text, View } from '../../../components';
import React from 'react';
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';

const DATA = require('../../../../assets/data/Categories.json');

const SearchVendors= () => {
  return (
    <View style={[Styles.parent]}>
        <View style={[Styles.child]}>
            <View style={[Styles.main_cont]}>
                <View style={Styles.header}>
                        <View style={{flex: 1}}>
                            <Ionicons name='arrow-back-outline' size={20} color='black'/>
                        </View>
                        <View style={{flex: 6}}>     
                            <Text variant='subheader' fontSize={16}>Search For Vendors</Text> 
                        </View>  
                </View>
            </View>
            <View style={{width: '100%', height: 6, backgroundColor: '#ccc'}}></View>
            <View style={[Styles.body]}>
                <FlatList
                //horizontal
                  numColumns={3}
                  data={DATA}
                  renderItem={({item}) => 
                <View style={[Styles.sub_cont]}>
                     <View style={[Styles.imageBox]}>
                         <Image source={item.image} resizeMode='contain' style={{ width: '100%', height: 50 }} />
                    </View>          
                    <Text variant='xs' style={{fontSize:15, marginTop:5}} textAlign='center'>{item.name}</Text>
                </View>
                }
                keyExtractor={item => item.id}/> 
            </View>
        </View>
    </View>
  )
}

export default SearchVendors;
