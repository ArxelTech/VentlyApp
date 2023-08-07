import { border } from '@shopify/restyle'
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({

    main_cont: {
        height:'100%', width:'100%',position:'absolute', 
        zIndex:999, backgroundColor:'#000000c0',
    },
    sub_cont : {
        height:'55%', width:'100%', 
        backgroundColor:'transparent',
        opacity:10, zIndex:999
    },
    centerElement: {justifyContent: 'center', alignItems: 'center'},
    card: {
        height:'45%', width:'100%', backgroundColor:'#FFFFFF', borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, padding:5, display:'flex',flexDirection:'row', 
        justifyContent:'center', alignItems:'center',
    },
    container: {
        height:'90%', width:'90%',display:'flex',flexDirection:'column', 
         alignItems:'center', 
         
    },
    title: {
        
        width:'100%',
        height:60,
        display:'flex',flexDirection:'column', 
        alignItems:'center',
        padding:10
    },
    form: {
        // backgroundColor:'yellow',
        height:120,
        width:'100%',
        
    },
    button: {
        
        height:100,
        display:'flex',flexDirection:'row', 
        justifyContent:'center', alignItems:'center',   
    },
    btn: {
       
        width:'60%',
        display:'flex',flexDirection:'row', 
        justifyContent:'space-evenly', alignItems:'center',  
    },
    outlineBtn: {
        width:'45%',
        height:'40%'
        
    },
    fillBtn: {
        width:'45%',
        height:'40%'

    }
   
})