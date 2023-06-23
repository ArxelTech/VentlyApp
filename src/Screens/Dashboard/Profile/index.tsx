import * as React from 'react';
import { View,Image, Text, TouchableOpacity, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Styles} from './style';
import MyAccounts from './MyAccount';
import Notifications from '../Notifications';


function FeedScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>feed</Text>
  </View>
  );
}

function NotificationsScreen() {
  return (
    <Notifications/>
  );
}
function CreateEventScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>create Event!</Text>
    </View>
  );
}
function AccountScreen({navigation}:any) {
  return (
    <MyAccounts navigation={navigation} />
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
    <View style={Styles.tabBar}>
      {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
        const { options } = descriptors[route.key];

        const IconFocused = state.index === index;
        const isFocused = state.index === index;
        const feed =
          route.name == 'feeds' ? 
          <View style={Styles.tabBarbtn}>
              <Image
                source={require('../../../../assets/bottomTabIcons/newsfeed.png')}
                resizeMode='contain'
                style={[Styles.icon,{ tintColor: IconFocused ? '#FF4471': '#B0B1B8',}]}/>
              <Text 
                style={{ color: isFocused ? '#FF4471' : '#B0B1B8', fontSize:8}}>
                Feeds
              </Text> 
          </View>
          : null; 
        const notify =
          route.name == 'notifications' ? 
          <View style={Styles.tabBarbtn}>
            <Image
                source={require('../../../../assets/bottomTabIcons/notification.png')}
                resizeMode='contain'
                style={[Styles.icon,{ tintColor: IconFocused ? '#FF4471': '#B0B1B8',}]}/>
              <Text 
                style={{ color: isFocused ? '#FF4471' : '#B0B1B8', fontSize:8}}>
                Notifications
            </Text> 
          </View> 
          : null; 

        const events =
          route.name == 'createEvent' ?
          
              <View style={Styles.postIcon}>
                
                  {/* <Image
                    source={require('../../../../assets/bottomTabIcons/plus.png')}
                    resizeMode='contain'
                    style={{
                    width:15,
                    height:15,
                    tintColor: IconFocused ? '#B0B1B8': '#B0B1B8',
                  }}/>  
                       */}
              </View>
          : null; 

        const account =
          route.name == 'account' ?
          <View style={Styles.tabBarbtn}>
              <Image
                source={require('../../../../assets/bottomTabIcons/user.png')}
                resizeMode='contain'
                style={[Styles.icon,{ tintColor: IconFocused ? '#FF4471': '#B0B1B8',}]}
              /> 
              <Text 
                style={{ color: isFocused ? '#FF4471': '#B0B1B8', fontSize:8}}>
                Accounts
            </Text> 

          </View>
          
          : null; 

        const settings =
          route.name == 'settings' ? 
          <View style={Styles.tabBarbtn}>
            <Image
              source={require('../../../../assets/bottomTabIcons/settings.png')}
              resizeMode='contain'
              style={[Styles.icon,{ tintColor: IconFocused ? '#FF4471': '#B0B1B8',}]}
            />
            <Text 
                style={{ color: isFocused ? '#FF4471' : '#B0B1B8', fontSize:8}}>
                  Settings
            </Text>
            </View>
          
          : null; 
         
        // const isFocused = state.index === index;

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
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <View style={Styles.tabsContainer}>
              <Text 
                >
                {feed}{notify}{events}{account}{settings}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function App({navigation: NativeStackNavigationProp }:any){
   const navigation = NativeStackNavigationProp;

  return (
     <>
         <Tab.Navigator  
          screenOptions={{ headerShown: false,}}
          initialRouteName='account'
     
        tabBar={(props) => <MyTabBar {...props}/>}>
        <Tab.Screen name="feeds" component={FeedScreen} 
        />
        <Tab.Screen name="notifications" component={NotificationsScreen} />
        <Tab.Screen name="createEvent" component={CreateEventScreen} />
        <Tab.Screen name="account" component={AccountScreen} />
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Navigator>
      <Pressable style={Styles.post} onPress={()=> navigation.navigate('events') }>
          <View > 
                <Image
                      source={require('../../../../assets/bottomTabIcons/plus.png')}
                      resizeMode='contain'
                      style={{
                      width:15,
                      height:15,
                      // tintColor: IconFocused ? '#B0B1B8': '#B0B1B8',
                    }}/>      
          </View>
        </Pressable>   
    </>
  );
}