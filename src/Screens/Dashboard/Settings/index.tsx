// import { StyleSheet,Image, FlatList} from 'react-native';
import {Text, View } from '../../../components';
import React, { useState } from 'react';
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { Switch, TouchableOpacity} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const DATA = require('../../../../assets/data/Categories.json');

const Settings = ({navigation}: { navigation: NativeStackNavigationProp<any> }) => {

  const settings = [
    {
      id: 1,
      title: 'General Settings',
      description: 'Manage basic information like your name, username and email address',
      link:'general'
    },
    {
      id: 2,
      title: 'Support Tickets',
      description: 'Keep track of support issues like reports and disputes here',
      link:'supportSettings'
    },
    {
      id: 3,
      title: 'Event Feed Settings',
      description: 'Customize your personal event feed and set the kind of content you want to see',
      link:'eventFeeds'
    },
    {
      id: 4,
      title: 'Notifications',
      description: 'Manage the kind of notifications you receive whether its in app or email notifications',
      link:'notifications'
    },
    {
      id: 5,
      title: 'Cards & Banks',
      description: 'Manage your linked debit cards for making payments and also manage bank accounts for receiving payments',
      link:''
    },
    {
      id: 6,
      title: 'Privacy & Security',
      description: 'Manage important security and privacy features for your account',
      link:'privacy'
    },
    {
      id: 7,
      title: 'Report A Problem',
      description: 'Report important issues to the vent.ly team to get solutions',
      link:''
    },
    {
      id: 8,
      title: 'Logout',
      description: '',
      link:''
    },
  ]

const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[Styles.parent]}>
        <View style={[Styles.child]}>
            <View style={[Styles.main_cont]}>
                <View style={Styles.header}>
                        <View style={{flex: 1}}>
                            <Ionicons name='arrow-back-outline' size={20} color='black'/>
                        </View>
                        <View style={{flex: 6}}>     
                            <Text variant='subheader' fontWeight={'700'} fontSize={14}>Settings</Text> 
                        </View>  
                </View>
            </View>
            <View style={[Styles.body]}>
               <View style={[Styles.bodyContaner]}>
                <TouchableOpacity>
                  <View style={[Styles.theme]}>
                      <View style={{width:'80%'}}>
                        <Text variant='subheader' style={{color:'#565656'}} fontWeight={'700'} fontSize={14}>Turn On Dark Mode</Text>
                        <Text variant='xs' lineHeight={14} style={{color:'#565656'}} fontSize={12}>Switch to dark mode to reduce strain on your eyes</Text>
                      </View>
                      <View>
                      <View style={[{ height:50, width:'100%'}]}>
                      
                        <View style={Styles.toggle}>
                          <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                          />
                        </View>
                      
                    </View>
                  </View>
                  </View>
                </TouchableOpacity>
                {settings.map((item)=> {
                      return(
                      <View key={item.id}>
                        <TouchableOpacity onPress={()=>navigation.navigate(item.link)}>
                          <View style={[Styles.settings]}>
                              <View style={{width:'90%'}}>
                                <Text variant='subheader' style={{color:'#565656'}} fontWeight={'700'} fontSize={14}>{item.title}</Text>
                                <Text variant='xs' lineHeight={14} style={{color:'#565656'}} fontSize={12}>{item.description}</Text>
                              </View>
                          </View>
                        </TouchableOpacity>
                      </View> 
                      )
                  })}
               </View>
            </View>
        </View>
    </View>
  )
}

export default Settings;
