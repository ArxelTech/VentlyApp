import React from 'react'
import { View, Text } from '../../../components'
import { Styles } from './style'
import { Image, ImageBackground, ScrollView, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import AuthButton from '../../../components/Authentication/AuthButton'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../../../Theme/theme'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface IText {
    header: string;
    body: string;
    buttonText: string;
    actionText: string;
    action: string;
    link: string; 
    authroute: string;
}

const AuthMethod = ({navigation}: { navigation: NativeStackNavigationProp<any> }) => {
    const route = useRoute<any>();
    const { type } = route.params;

    const theme = useTheme<Theme>();

    const texts = (): IText => {
        const obj: { [key: string]: IText } = {
            'login': {
                header: "welcome back",
                body: "Login to continue using vently",
                buttonText: 'Login with email',
                actionText: 'Dont have an account? ',
                action: 'Sign up',
                link: 'method2',
                authroute: 'login',
            },
            'signup': {
                header: 'Create an account',
                body: 'We can\'t wait to have you onboard',
                buttonText: 'Signup with email',
                actionText: 'Already have an account? ',
                action: 'Login',
                link: 'login',
                authroute: 'signup',
            }
        }
        return obj[type];
    };

    const navigate = React.useCallback(() => {
        navigation.navigate(texts().link);
    }, [])
  return (
    <View style={Styles.parent}>

        {/* STATUS BAR */}

        <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />

        {/* MASKED VIEW CONTAINER */}

        <View style={Styles.imageBackground}>
            <ImageBackground source={require('../../../../assets/images/signinBG.png')} resizeMode='cover' style={StyleSheet.absoluteFillObject}>
                <View style={Styles.mask}>
                    <View style={Styles.iconContainer}>
                        <Image source={require('../../../../assets/images/Logo/whitelogo.png')} resizeMode='contain' style={{ width: '100%', height: 30}} />
                    </View>
                </View>
            </ImageBackground>
        </View>

        <View style={Styles.secondView}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingTop: 40, paddingHorizontal: 40 }}>
                <Text variant='subheader' textAlign='center'>{texts().header}</Text>
                <Text variant='body' textAlign='center'>{texts().body}</Text>

                <View style={Styles.buttonContainer}>
                    <AuthButton label="Continue with Facebook" icon={<Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../../../../assets/images/facebookicon.png')} />} action={() => {}} backgroundColor='white' borderColor='lightgrey' borderWidth={2} />

                    <View style={{ width: '100%', marginVertical: 20 }}>
                        <AuthButton label="Continue with Google" icon={<Image resizeMode='contain' style={{ width: 40, height: 40 }} source={require('../../../../assets/images/googleicon.png')} />} action={() => {}} backgroundColor='white' borderColor='lightgrey' borderWidth={2} />
                    </View>

                    <AuthButton label={texts().buttonText} icon={<Ionicons name='mail' size={30} color='white' />} action={() => navigation.navigate(texts().authroute)} backgroundColor={theme.colors.brandColor} borderWidth={0} color='white' />
                </View>

                <Text onPress={navigate} variant='body' textAlign='center' >{texts().actionText} <Text variant='body' color='brandColor'>{texts().action}</Text></Text>
            </ScrollView>
        </View>
    </View>
  )
}

export default AuthMethod;