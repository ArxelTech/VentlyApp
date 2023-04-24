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
    header: {
        // backgroundColor: '#ff0000',
        marginTop: 40,
        height: '30%'
    },
    child: {
        height: '100%',
        width: '90%',
        marginTop: '30%'
        // backgroundColor: '#ccc'
    },
    buttonContainer: {
        display: 'flex',
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // backgroundColor: '#ffff00'
    },

});