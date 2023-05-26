// import * as React from 'react';
// import {CustomButton, Text, View } from '../../../components';
// import {
//   Animated,
//   TouchableOpacity,
//   StatusBar,
//   Pressable,
// } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import EventDetails from './EventDetails';
// import Discussions from './Discussions';
// import Highlights from './Highlights'

// import { Styles } from './style';
// import { Ionicons } from '@expo/vector-icons';

// const FirstRoute = () => (
//   <EventDetails />
// );
// const SecondRoute = () => (
//   <Discussions />
// );
// const ThirdRoute = () => (
//   <Highlights  />
// );

// export default class TabViewExample extends React.Component {
//   state = {
//     index: 0,
//     routes: [
//       { key: 'first', title: 'Events Details' },
//       { key: 'second', title: 'Discussions' },
//       { key: 'third', title: 'Highlights' },
//     ],
//   };

//   _handleIndexChange = (index: any) => this.setState({ index });

//   _renderTabBar = (props: { navigationState: { routes: any[]; }; position: { interpolate: (arg0: { inputRange: any; outputRange: any; }) => any; }; }) => {
//     const inputRange = props.navigationState.routes.map((x, i) => i);

//     return (
//       <View style={Styles.tabBar}>
//         {props.navigationState.routes.map((route, i) => {
//           const opacity = props.position.interpolate({
//             inputRange,
//             outputRange: inputRange.map((inputIndex) =>
//               inputIndex === i ? 1 : 0.5
//             ),
//           });

//           return (
//             <TouchableOpacity
//               style={Styles.tabItem}
//               onPress={() => this.setState({ index: i })}>
//               <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     );
//   };

//   _renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
//     third:  ThirdRoute
//   });

//   render() {
//     return (

//     );
//   }
// }



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
        <View style={[Styles.child]}>
          {/* Header */}
          <View style={[Styles.main_cont]}>
            <View style={Styles.header}>
              <View style={{flex: 0.8}}>
                <Ionicons name='arrow-back-outline' size={25} color='black'/>
              </View>
              <View style={{flex: 6, flexDirection:'row'}}> 
                  <View style={{flex:1}}>
                    <Text variant='header' style={{fontSize:18}}>Preview</Text> 
                  </View>    
              </View> 
              </View>
              
          </View>
          {/* Tab details */}
          <View style={Styles.parent}>
              <Tab.Navigator
                screenOptions={{
                tabBarActiveTintColor:'white',
                tabBarInactiveTintColor:'red',
                tabBarIndicatorStyle: {
                  backgroundColor: '#FF406E',
                  height: 4,
                  width: 100,
                  marginLeft:20
                },
                tabBarScrollEnabled: false,
                tabBarLabelStyle: {fontSize: 15, color:'#FF406E' , textTransform: 'none'},
                tabBarItemStyle: { width: 120,   },
                tabBarStyle: {
                  height: 60,
                  width: '100%',
                  paddingTop:10,
                  paddingBottom:10,
                  paddingLeft:10,
                  // marginLeft:10,
                  backgroundColor: '#FFFFFF',
                },
              }}
              >
        <Tab.Screen name="Event Details" component={Event} />
        <Tab.Screen name="Discussions" component={Discuss} />
        <Tab.Screen name="Highlight" component={High} />
      </Tab.Navigator>
    </View>
      
          <View style={Styles.bottomTab}>
             <View style={Styles.PostBtn}>
              <CustomButton label='Post Event' onPress={()=>console.log('hi')} color='white' />
             </View>
             <View style={Styles.transparentBtn}>
                <View style={{flex:5}}>
                      <Pressable style={{padding:10 ,
                        borderWidth:2, borderStyle:'solid', borderRadius:10, borderColor:'#FF406E', flex:1, alignItems:'center'}}>
                          <Text variant='xs' style={{color:'#FF406E'}}>Save As draft</Text>
                      </Pressable>
                </View> 
             </View>
          </View>
        </View> 
    </View>
  );
}

export default App;