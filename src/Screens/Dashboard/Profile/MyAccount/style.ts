import { backgroundColor } from '@shopify/restyle';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
   flexRow: {
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'row'
    },
    main_container: {
        width:'100%',
        height:'100%',
        backgroundColor:'white',
    },
    pageTitle: {
    //   backgroundColor:'yellow',
      height: 80  
    },
    header: {
        // backgroundColor:'green',
        height:180, 
    },
    profileDetails: {
    //   backgroundColor:'#FFFFFF',
      width:'90%',
      height:'100%',
    },
    displayPhoto: {
    //   backgroundColor:'red',
      height:'80%',
      width:'35%'
    },
    userName: {
    //   backgroundColor:'blue',
      display:'flex',
      height:'80%',
      width:'60%',
      justifyContent:'flex-end',
      padding:5
    },
    name: {
        // backgroundColor:'grey',
        display:'flex',
        // alignItems:'flex-end'
        height:30,
        paddingLeft:10
    },
    gmail: {
        // backgroundColor:'green',
        paddingLeft:10,
        // height:60
    },
    profileCategory: {
        // backgroundColor:'brown',
        // height:50
    },
    toggle: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    notification: {
      borderRadius: 100,
      width:30,
      height:30,
      backgroundColor:'#EF2354'
    }
   
   
});