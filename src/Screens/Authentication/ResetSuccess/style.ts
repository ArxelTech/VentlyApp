import { backgroundColor } from '@shopify/restyle';
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    parent: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 20,
        // backgroundColor: '#fff000'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '22%',
        // backgroundColor: '#ff0000'
    },
    middle: {
        width: '100%',
        height: '40%',
        // backgroundColor: '#ccc'
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // alignContent: 'center',
        height: '40%',
    },
    button: {
        width: '100%',
        height: 55,
        backgroundColor: '#ffff00',
        marginTop: 10
    },
    h2: {
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 20 
    },
    text: {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        color: '#ccc'
    },
    p: {
       color: '#ccccc',
       width: '60%',
       textAlign: 'center'
    },
    lockImg: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#000000',
        height: '60%',
    }
    // iconBox: {
    //     width: '100%',
    //     height: '15%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: 20,
    // },
    // sliderConatainer: {
    //     width: '100%',
    //     height: '50%',
    // },
    // indicatorContainer: {
    //     width: '100%',
    //     height: 50,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    // indicator: {
    //     width: 10,
    //     height: 10,
    //     borderRadius: 5,
    //     marginHorizontal: 5,
    // },
    // textContainer: {
    //     width: '100%',
    //     height: '8%',
    //     alignItems: 'center',
    // },
    // buttonContainer: {
    //     width: '100%',
    //     height: '15%',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },

});