import { backgroundColor } from '@shopify/restyle';
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    iconContainer: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    terms: {
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center'
    },
    icon: {
       display: 'flex',
       flexDirection: 'row',
       marginTop: '5%',
    },text: {
       width: '70%',
       marginLeft: '5%'
    },
    meta: {
       color: '#FF4471',
    }
});