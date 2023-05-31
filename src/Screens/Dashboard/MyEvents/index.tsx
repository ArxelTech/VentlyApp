
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
import Created from './Created';
import ComingUp from './ComingUp';
import Ended from './Ended';
import Live from './Live';

function CreatedEvents (){
  return (
    <View>
      <Created />
    </View>
  );
}

function UpComing (){
  return (
    <View>
      <ComingUp/>
    </View>
  );
}
function ClosedEvents (){
  return (
    <View>
      <Ended/>
    </View>
  );
}
function LiveEvent (){
  return (
    <View>
      <Live/>
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
                    <Text variant='header' style={{fontSize:18}}>Preview</Text>   
              </View> 
              <TouchableOpacity style={{flex: 0.8,padding:5}}>
                <Ionicons name='search' size={25} color='black'/>
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
                  width: 80,
                  marginLeft:10,
                  display:'flex',
                },
                tabBarScrollEnabled: false,
                tabBarLabelStyle: {fontSize: 14, fontWeight:'700' , textTransform: 'none'},
                tabBarItemStyle: { width: 98   },
                tabBarStyle: {
                  height: 60,
                  width: '100%',
                  paddingTop:10,
                  paddingBottom:10,
                  marginLeft:-5,
                  backgroundColor: '#FFFFFF',
                  
                  
                },
              }}
              >
        <Tab.Screen name="Created" component={CreatedEvents} />
        <Tab.Screen name="Coming Up" component={UpComing} />
        <Tab.Screen name="Ended" component={ClosedEvents} />
        <Tab.Screen name="Live" component={LiveEvent} />
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