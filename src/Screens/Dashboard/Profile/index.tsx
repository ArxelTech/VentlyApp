// import { View, Text } from '../../../components'
// import React from 'react'
// import {Styles} from './style'

// const Profile = () => {
//   return (
//     <>
//     <View style={Styles.parent}>
//       <View style={Styles.child}>

//       </View>
//     </View>
//      <View style={Styles.bottom}>
        
//      </View>
//      </>
//   )
// }

// export default Profile

import * as React from 'react';
import { View,Image, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const img = require('../../../../assets/bottomTabIcons/newsfeed.png');

function feedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>feeds!</Text>
    </View>
  );
}

function notificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>notifications!</Text>
    </View>
  );
}
function createEventScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>create Event!</Text>
    </View>
  );
}
function accountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>account!</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function MyTabBar({ state, descriptors, navigation }:any) {
  return (
    <View style={{
       flexDirection: 'row',
       position: 'absolute',
       bottom: 5,
       left:5,
       right:5,
       elevation: 0,
       backgroundColor:'#ccc',
       borderRadius:15,
       height: 90,
    }}>
      {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? null : route.name;
          options.title === false ? null : null;
          
        const isFocused = state.index === index;

        // const icon =
        // options.tabBarIcon !== undefined ? options.tabBarIcon : null;

        const icon = require('../../../../assets/data/bottomTabIcons.json')

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
          
            <View style={{ display:'flex', justifyContent:'center',alignItems:'center', width:'100%',height:'100%',padding:10}}>
              {/* <Image
                source={require('../../../../assets/bottomTabIcons/newsfeed.png')}
                resizeMode='contain'
                style={{
                  width:25,
                  height:25,
                  tintColor: isFocused ? 'red':'blue'
                }}
                /> */}
                {icon.map((item:any)=>(
                  <View key={item.id}>
                     {/* <Image
                        source={item.icon}
                        resizeMode='contain'
                        style={{
                          width:25,
                          height:25,
                          tintColor: isFocused ? 'red':'blue'
                        }}
                      /> */}
                      {/* <Text>{item.name}</Text> */}
                  </View>
                ))}
              <Text 
                style={{ color: isFocused ? 'red' : 'blue', fontSize:12}}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
     <>
         <Tab.Navigator  
      screenOptions={{ headerShown: false}}
        tabBar={(props) => <MyTabBar {...props} 
      />}
      >
        <Tab.Screen name="feeds" component={feedScreen} 
        //   options={{
        //   tabBarIcon: ({focused}) => (
        //     <View style={{alignItems:'center', justifyContent:'center', top: 10}}>
        //       <Image
        //         source={require('')}
        //         resizeMode='contain'
        //         style={{
        //           width:25,
        //           height:25,
        //           tintColor: focused ? 'red':'blue'
        //         }}
        //         />
                
        //     </View>
        //   )

        // }}
        />
        <Tab.Screen name="notifications" component={notificationsScreen} />
        <Tab.Screen name="createEvent" component={createEventScreen} />
        <Tab.Screen name="account" component={accountScreen} />
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Navigator>
      </>
  );
}