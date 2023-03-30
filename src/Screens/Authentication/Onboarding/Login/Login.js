import { 
    StyleSheet,
     Text,
     Image, 
     View,
     Pressable
     } 
from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react';
import signinBG from '../../../../../assets/images/signinBG.png';
import logo2 from '../../../../../assets/images/ventlyLogo2.png';
import googleIcon from '../../../../../assets/images/google.png';
// import { Icon } from 'react-native-ui-lib';
const Login = (button) => {
  const { onPress, facebook = 'Continue with facebook', google = 'Continue with google' , email = 'Login With Email',} = button;
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={[styles.logo]}
                source={logo2}
                resizeMode="contain"
                />
        </View >
        <View style={styles.header}>
           <Image style={[styles.img ]}
              source={signinBG}
              resizeMode="cover"
            /> 
           
        </View>  
        <View style={styles.bottom}>
            <View style={styles.bottom_title}>
                <View>
                    <Text style={styles.h2}>Welcome Back</Text>
                    <Text style={styles.p}>Login to continue using vently</Text>
                </View>  
            </View>
            <View style={styles.bottom_buttons}>
                <View>
                <Pressable style={styles.button} onPress={onPress}>
                    <Icon
                       name="facebook"
                       style={[styles.icon]}
                       color={'#0066ff'}
                       size={30}
                    />
                    <Text style={styles.btnText}>{facebook}</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={onPress}>
                    {/* <Icon
                       name="google"
                       style={[styles.icon]}
                       color={'#ff0000'}
                       size={30}
                    /> */}
                    <Image
                        source={googleIcon}
                        style={[styles.googleIcon]}
                        resizeMode='contain'
                    />
                      
                    <Text style={styles.btnText}>{google}</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={onPress}>
                    <Icon
                       name="envelope"
                       style={[styles.icon]}
                       color={'#FF406E'}
                       size={30}
                    />
                    <Text style={styles.btnText}>{email}</Text>
                </Pressable>           
                </View>  
            </View>
            <View style={styles.bottom_footer}>
                <Text style={styles.text}>Don't have an account? <Text style={styles.span}>Sign Up</Text></Text>
            </View>
        </View>   
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#f00000'
    },
    header: {
        width: '100%',
        height: '45%',
        backgroundColor: '#000000',
    },
    img: {
        width: '100%',
        height:'100%'
    },
    logoContainer: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#000000',
        height: '15%',
        zIndex: 40,
    },
    logo: {
    // position: 'absolute',
    // top: 10,
    // width: 100,
    },
    bottom: {
        position: 'absolute',
        width: '100%',
        height: '60%',
        top: '40%',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
    },
    bottom_title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '20%',
        // backgroundColor: '#f00000',
    },
    h2: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 500,
    },
    p: {
        fontSize: 14,
        fontWeight: 500,
    },
    bottom_buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '60%',
        // backgroundColor: '#E16000',
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginTop: 10,
        borderRadius: 8,
        elevation: 1.5,
        // backgroundColor: '#E61648',
        width: 300,
        height: '30%',
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 0.1,
      },
      icon: {
          width: '15%',
          textAlign: 'center'
      },
      btnText: {
        width: '85%',
        // backgroundColor: '#ff0000',
        textAlign: 'center',
        fontWeight:400,
      },
      googleIcon: {
         width: 40,
      },
      span: {
        color: '#FF406E',
      },
      bottom_footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '20%',
        // backgroundColor: '#ccc',
      }
    

    
})