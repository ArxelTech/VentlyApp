import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  const translateYImage = new Animated.Value(0);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>    
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  image: {
    flex: 0.6,
    width: '55%',
    // height: '20%'
    bottom: 20,
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
    // justifyContent: 'center',
    width:'80%'
  },
  title: {
    fontSize: 20,
    fontWeight: '350',
    color: '#333',
    textAlign: 'center',
    bottom: '6%' 
  },
 
});
