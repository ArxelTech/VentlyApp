// import { StyleSheet,Image, FlatList} from 'react-native';
import {Text, View } from '../../../../components';
import React, { useState } from 'react';
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { Switch, TouchableOpacity} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SetNotifications = ({navigation}: { navigation: NativeStackNavigationProp<any> }) => {

  const settings = [
    {
      id: 1,
      title: 'Comments',
      description: 'Get notified on comments where you have been mentioned',
    },
    {
      id: 2,
      title: 'Invites',
      description: 'Get notified when you have a new invite to an event',
     
    },
    {
      id: 3,
      title: 'Tickets',
      description: 'Get notified on all ticket related information like when someone sends you a ticket and others',
   
    },
    {
      id: 4,
      title: 'Events',
      description: 'Get notifications for events youre hosting, following or a co-host off',

    },
    {
      id: 5,
      title: 'Payments',
      description: 'Get all notifications regarding payments and bank information',
   
    },
    {
      id: 6,
      title: 'Messages',
      description: 'Get notified when you have a new message from someone',
    },
    {
      id: 7,
      title: 'General Updates',
      description: 'Get notified when there are important updates from the Vently Team',
    },
   
  ]

const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[Styles.parent]}>
        <View style={[Styles.child]}>
            <View style={[Styles.main_cont]}>
                <View style={Styles.header}>
                        <View style={{flex: 2}}>
                            <Ionicons name='arrow-back-outline' size={20} color='black'/>
                        </View>
                        <View style={{flex: 4}}>     
                            <Text variant='subheader' fontWeight={'700'} fontSize={20}>Notifications</Text> 
                        </View>  
                </View>
            </View>
            <View style={[Styles.body]}>
               <View style={[Styles.bodyContaner]}>
                
                {settings.map((item)=> {
                      return(
                      <View key={item.id}>
                        <TouchableOpacity>
                            <View style={[Styles.theme]}>
                                <View style={{width:'80%'}}>
                                    <Text variant='subheader' style={{color:'#565656'}} fontWeight={'700'} fontSize={14}>{item.title}</Text>
                                    <Text variant='xs' lineHeight={14} style={{color:'#565656'}} fontSize={12}>{item.description}</Text>
                                </View>
                                <View>
                                <View style={[{ height:50, width:'100%'}]}>
                                
                                    <View style={Styles.toggle}>
                                    <Switch
                                        trackColor={{false: '#FFFFFF', true: '#FF406E'}}
                                        thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                    </View>
                                
                                </View>
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

export default SetNotifications;
