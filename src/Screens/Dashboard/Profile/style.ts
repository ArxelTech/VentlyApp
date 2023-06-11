import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    parent: {
        width:'100%',
        height:'90%',
        backgroundColor:'red',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    child: {
        width: '90%',
        height: '100%',
        backgroundColor:'yellow'
    },
    bottom: {
        backgroundColor: 'green',
        width:'100%',
        height:'10%'
    }

});