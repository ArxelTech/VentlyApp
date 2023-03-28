import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
import Slider from '../../../components/slider/Slider'
// import { Modal } from '../../../components'

const Onboarding = () => {
  return (
    <View style={styles.container}>
    <Slider/>
      {/* <Modal /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ffff'
  },
  // greeting: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   margin: 16,
  // },
});

export default Onboarding;