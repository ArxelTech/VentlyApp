import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
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