import { Modal, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { View, Text } from '..';
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native-ui-lib';

const SettingUpModal = ({ show }: { show: boolean }) => {
  return (
    <Modal
        animationType='slide'
        transparent={false}
        visible={show}
    >

    <View style={Styles.parent}>
        <View style={Styles.header}>
          <Image source={require('../../../assets/images/Logo/Vlogo.png')} style={{ width: '100%', height: 30 }} resizeMode='contain' />
        </View>
        <View style={Styles.userSetup}>
          <View>
            <Text style={{fontSize:20, marginTop: 0}} variant='header' textAlign={'center'}>Setting Up your account</Text>
          </View>
          <View style={Styles.UserImg}>
            <Image source={require('../../../assets/images/UserImg.png')} style={{ width: '100%', height: 100 }} resizeMode='contain' /> 
          </View> 
          <View style={Styles.text}>
            <View style={{width: '70%'}}>
              <Text variant='xs' textAlign={'center'} fontWeight={'500'}>We're setting up your account. This should take a moment. Hang on</Text>  
            </View>
          </View>
          </View>
        <View style={Styles.loader}>
          <ActivityIndicator color={Colors.brandColor} size='large' />
        </View>
      </View>

    </Modal>
  )
}

const Styles = StyleSheet.create({
    parent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        // flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30%',
        // backroundColor: '#fff000',
        width: '100%'
    },
    userSetup: {
        display: 'flex',
        alignItem: 'center',
        height: '40%',
        // backgroundColor: '#ffff00',
        width: '100%'
    },
    UserImg: {
        display: 'flex',
        justifyContent: 'center',
        height: '50%'
    },
    text: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
        // backgroundColor: '#ff0000',
    },
    loader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '30%',
        // backgroundColor: '#ccc',
        width: '100%'
    }
});

export default SettingUpModal