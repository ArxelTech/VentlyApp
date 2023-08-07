import { StyleSheet } from 'react-native';

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
        marginTop: 60,
        height: '30%'
    },
    imgUpload: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff000',
        height: '60%',
    },
    bottom: {
        
    },
    profileImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'lightgrey'
    },
    profileAvatar: {
        display: 'flex',
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: 'lightgrey',
        overflow: 'hidden'
    },
    child: {
        height: '100%',
        width: '100%',
        marginTop: '10%',
        // backgroundColor: '#ccc'
    },
    dropdown: {
        // position: 'absolute',
        // backgroundColor: 'red',
        // color: 'pink',
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderWidth: 0.2,
        height: '30%',
        width: '100%'
        // top: 50,
    },
    listItem: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: 72,
        fontSize: 20,
        // backgroundColor: 'blue',
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10
    },
    switchContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        marginVertical: 20,
    }

});