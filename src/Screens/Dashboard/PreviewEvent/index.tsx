import { opacity } from '@shopify/restyle';
import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text, Animated } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
	
    <TabView 
      navigationState={{ index, routes }}
      renderTabBar={props => (
        <TabBar
		  
          {...props}
          renderLabel={({ route, color }) => (
            <Animated.Text >{route.title}</Animated.Text>
          )}
          style={{backgroundColor: 'white'}}
        />
      )}
	  
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
	  
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  indicatorStyle: {
    backgroundColor: 'red',
    padding: 1.5,
    marginBottom: -2,
  },
  divider: {
    zIndex: 100,
    position: 'absolute',
    width: 1,
    height: 48,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
});
