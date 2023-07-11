import { border } from '@shopify/restyle';
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    flexRow: {
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row'
    },
    flexCol: {
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'column'
    },
    main_cont: {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        // flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#FCFCFC'
        
    },
    container: {
        width:'90%',
        height:'80%',
      
    },
    header: {

    },
    noticeImg: {
     width:'90%',
     height:320,
    //  backgroundColor:'green'
    },
    image:{
        width:'100%', height:'100%',
        borderRadius: 6
    },
    eventsContainer: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:180,
       
      },
    subContainer: {
        height:'60%',
        width:'90%',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row'
       },
       eventImg: {
         width:'40%', 
       },
       text: {
         width:'60%',
         height:'90%',
         // backgroundColor:'red',
         paddingLeft:10,
         marginTop: -15
       },
       icon: {
         height:'100%',
         flex:0.5,
         display:'flex',
         justifyContent:'center',
         alignItems:'center',
     },
     date: {
      flex:4,
      justifyContent:'center',
      padding:8,
     },
     title: {
         height:50,
         width:'100%',
         display:'flex',
         flexDirection:'row',
         justifyContent:'center',
         alignItems:'center',
     },
     
   
});