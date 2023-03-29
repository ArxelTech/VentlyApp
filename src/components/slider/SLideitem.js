import { StyleSheet, Image, Text, View , Dimensions} from 'react-native'
import React from 'react';

const {width, height} = Dimensions.get('screen');

const SLideitem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.img}
      resizeMode="contain" style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  )
}

export default SLideitem;

const styles = StyleSheet.create({
   container: {
    width,
    height,
    alignItems: 'center',
   },
   image: {
    flex: 0.6,
    width: '100%',
   },
   content: {
    flex: 0.6,
    alignItems: 'center',
   },
   title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    width: '20%',
   },

})