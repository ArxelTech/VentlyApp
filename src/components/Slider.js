import {Animated, FlatList, StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import Slides from '../data';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import { Button } from 'react-native';
import logo from '../../assets/images/ventlyLogo.png'

const Slider = (button) => {
  const { onPress, title = 'Login', title2 = 'Get Started' } = button;
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={[styles.img ]}
              source={logo}
              resizeMode="contain"
            />
        </View>
        <View style={styles.middle}>
          <FlatList
            data={Slides}
            renderItem={({item}) => <SlideItem item={item} />}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
            onViewableItemsChanged={handleOnViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
          />
          <Pagination data={Slides} scrollX={scrollX} index={index} />    
        </View>
        <View style={styles.bottom}>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title2}</Text>
          </Pressable>
        </View>
      
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    // alignItems: 'center',
    // backgroundColor: '#ffcc00'
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 0.1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ffcccc',
    
  },
  middle: {
    width: '100%',
    height: '70%',
    // backgroundColor: '#0040ff'
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '15%',
    // backgroundColor: '#ffb3b3',
    padding: '2%'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#E61648',
    width: '45%',
    height: '70%'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  img: {
    width: 80,
    top: 10,
  }
});
