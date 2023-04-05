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
        // backgroundColor: '#ff0000'
    },
    child: {
        height: '100%',
        width: '90%',
        marginTop: '30%'
        // backgroundColor: '#ccc'
    },
    iconContainer: {
        width: '100%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    interests: {
        backgroundColor: 'blue',
        height: '45%'
    }
});