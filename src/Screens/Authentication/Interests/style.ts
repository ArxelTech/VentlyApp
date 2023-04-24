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
        // backgroundColor: 'red'
    },
    interests: {
        // backgroundColor: 'blue',
        height: '45%'
    },
    childContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 30
    },
    childContainer_B: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
        // justifyContent: 'space-evenly'
    },
    childContainer_C: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
        // justifyContent: 'space-evenly'
    },
    btn_X: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: 40,
        backgroundColor: '#FF406E',
        color: 'white',
        borderRadius: 6,
    },
    btn_Y: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: 40,
        backgroundColor: '#ccc',
        color: 'black',
        borderRadius: 6,
        marginLeft: '5%'
    },
    btn_A: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: 40,
        backgroundColor: '#ccc',
        color: 'black',
        borderRadius: 6,
    },
    btn_B: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 40,
        backgroundColor: '#ccc',
        color: 'black',
        borderRadius: 6,
        marginLeft: '5%'
    },
    btn_C: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: 40,
        backgroundColor: '#ccc',
        color: 'black',
        borderRadius: 6,
        marginLeft: '5%'
    },
    btn_D: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: 40,
        backgroundColor: '#ccc',
        color: 'black',
        borderRadius: 6,
    },
    btn_E: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: 40,
        backgroundColor: '#ccc',
        color: 'black',
        borderRadius: 6,
        marginLeft: '5%'
    },
    btn_F: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        height: 40,
        backgroundColor: '#ccc',
        color: 'black',
        borderRadius: 6,
        marginLeft: '5%'
    }

});