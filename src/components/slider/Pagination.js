import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pagination = ({data, scrollX}) => {
  return (
    <View style={styles.container}>
     {data.map((_, idx) => {
       const inputRange = [(idx - 1) * width, idx * width, (idx + 1)* width];

       const dotwidth = scrollX.interpolate({
        inputRange,
        outputRange: [12, 30, 12],
        extreapolate: 'clamp',
       })
      return (
      <View key={idx.toString()}
      style={[styles.dot, {width: dotwidth}]} />)
     })}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: '#ccc'
  }
})