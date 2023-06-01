
import * as React from 'react';
import {CustomButton, Text, View } from '../../../components';
import {
  Animated,
  TouchableOpacity,
  StatusBar,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Styles } from './style';
import { Ionicons } from '@expo/vector-icons'
import EventDetails from './EventDetails';
import Discussions from './Discussions';
import Highlights from './Highlights'

function Event (){
  return (
    <View>
      <EventDetails/>
    </View>
  );
}

function Discuss (){
  return (
    <View>
      <Discussions/>
    </View>
  );
}
function High (){
  return (
    <View>
      <Highlights/>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function App() {
  return (

    <View style={[Styles.parent]}>
       {/* <View style={Styles.Share}> */}
          
       {/* </View> */}
        <View style={[Styles.child]}>
          {/* Header */}
          <View style={[Styles.main_cont]}>
            <View style={Styles.header}>
              <TouchableOpacity style={{flex: 0.8,padding:5}}>
                <Ionicons name='arrow-back-outline' size={25} color='black'/>
              </TouchableOpacity>
              <View style={{flex: 6, flexDirection:'row',}}>          
                    <Text variant='header' style={{fontSize:18}}>Event Information</Text>   
              </View> 
              <TouchableOpacity style={{flex: 0.8,padding:5}}>
                <Ionicons name='ellipsis-vertical' size={25} color='black'/>
              </TouchableOpacity>
            </View> 
          </View>
          {/* Tab details */}
          <View style={Styles.tabContainer}>
              <Tab.Navigator
                screenOptions={{
                tabBarActiveTintColor:'#FF406E',
                tabBarInactiveTintColor:'#ccc',
                tabBarIndicatorStyle: {
                  backgroundColor: '#FF406E',
                  height: 4,
                  width: 100,
                  marginLeft:10,
                  display:'flex',
                },
                tabBarScrollEnabled: false,
                tabBarLabelStyle: {fontSize: 14, fontWeight:'700' , textTransform: 'none'},
                tabBarItemStyle: { width: 120,   },
                tabBarStyle: {
                  height: 60,
                  width: '100%',
                  paddingTop:10,
                  paddingBottom:10,
                  backgroundColor: '#FFFFFF',
                },
              }}
              >
        <Tab.Screen name="Event Details" component={Event} />
        <Tab.Screen name="Discussions" component={Discuss} />
        <Tab.Screen name="Highlights" component={High} />
      </Tab.Navigator>
    </View>
      
          <View style={Styles.bottomTab}>
             <View style={Styles.PostBtn}>
                <View style={{flex:5}}>
                    <TouchableOpacity style={Styles.btnfill}>
                          <Text variant='xs' style={{color:'#FFFFFF'}}>Buy Tickets Now Event</Text>
                    </TouchableOpacity>
                </View> 
             </View>
          </View>
        </View> 
    </View>
  );
}

export default App;