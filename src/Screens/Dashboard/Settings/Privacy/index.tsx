// import { StyleSheet,Image, FlatList} from 'react-native';
import {Text, View } from '../../../../components';
import React, { useState } from 'react';
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { Switch, TouchableOpacity} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Privacy = ({navigation}: { navigation: NativeStackNavigationProp<any> }) => {

  const settings = [
    {
      id: 1,
      title: 'Private Mode',
      description: 'Attend all events privately, nobody would have access to your information',
      isPrivate:true
    },
    {
      id: 2,
      title: 'Blocked user',
      description: '3 users',
    },
    {
      id: 3,
      title: 'Password',
      description: 'Reset your password',
    },

  ]

const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={[Styles.parent]}>
        <View style={[Styles.child]}>
            <View style={[Styles.main_cont]}>
                <View style={Styles.header}>
                        <View style={{flex: 1.5}}>
                            <Ionicons name='arrow-back-outline' size={20} color='black'/>
                        </View>
                        <View style={{flex: 4}}>     
                            <Text variant='subheader' fontWeight={'700'} fontSize={20}>Privacy & Security</Text> 
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
                                
                                   {item.isPrivate == true?
                                     <View style={Styles.toggle}>
                                     <Switch
                                         trackColor={{false: '#FFFFFF', true: '#FF406E'}}
                                         thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
                                         ios_backgroundColor="#3e3e3e"
                                         onValueChange={toggleSwitch}
                                         value={isEnabled}
                                     />
                                     </View> : 
                                     <View>
                                        <View style={{width:'100%', display:'flex', padding:14,justifyContent:'center', alignItems:'center'}}>
                                            <Ionicons name='chevron-forward-outline' size={20} color='#000000' />
                                        </View>
                                     </View>
                                   }
                                
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

export default Privacy ;
