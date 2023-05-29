import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    main_Container: {
        width: '100%',
        height: '100%',
        paddingRight:10,
        backgroundColor: '#FCFCFC'
    },
    parent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200%',
        width: '100%',
    },
    child: {
        height: '80%',
        width: '90%',
    },
    highlight: {
        padding:50,
        paddingTop:100,
        paddingBottom:100,
        width:'100%',
        height:'100%',
    },
    btn: {
        height:50,
        marginTop:20,
        backgroundColor:'#E61648',
        borderRadius:6,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    } 
});