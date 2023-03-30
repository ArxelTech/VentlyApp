import { 
    StyleSheet,
     Text,
     Image, 
     View } from 'react-native'
import React from 'react';
import signinBG from '../../../../../assets/images/signinBG.png';
import logo2 from '../../../../../assets/images/ventlyLogo2.png';
const Login = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
           <Image style={[styles.img ]}
              source={signinBG}
              resizeMode="cover"
            /> 

            <Image style={[styles.logo]}
               source={logo2}
               resizeMethod="contain"
            />
        </View>  
        <View style={styles.bottom}>

        </View>   
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#f00000'
    },
    header: {
        width: '100%',
        height: '40%',
        backgroundColor: '#000000',
    },
    img: {
        width: '100%',
        height:'100%'
    },
    logo: {
    //   position: 'absolute',
    // top: 10,
    },
    bottom: {
        width: '100%',
        height: '60%',
        backgroundColor: '#ccc'
    }
})