import {FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useRef} from 'react';
import SLideitem from './SLideitem';
import Slides from '../../../assets/data/SlideData';
import Pagination from './Pagination';

const slider = () => {
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
    }
  return (
    <View>
      <FlatList 
        data={Slides} 
        renderItem={({item}) => <SLideitem 
        item={item}
        />}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onscroll={handleOnScroll}
         
        />
       <Pagination data={Slides} scrollX={scrollX}/>
    </View>
  );
}

export default slider;

const styles = StyleSheet.create({})