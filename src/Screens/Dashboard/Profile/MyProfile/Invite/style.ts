import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    parent: {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        // flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#FCFCFC'
    },
    child: {
        height: '100%',
        width: '100%',
    },
    main_cont: {
        width:'100%',
        height:'15%',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:40
    },
    sub_cont: {
        width:'30%',
        height:'100%',
        marginTop:10,
        padding: 0,
        marginLeft:10,
        display:'flex', alignItems:'center', justifyContent:'center',
    },
    imageBox: {
        backgroundColor:'#FFFFFF',borderStyle:'solid',
        borderWidth: 1, borderColor:'#F2F2F2',
        height: 100, width:100, display:'flex', 
        alignItems:'center', justifyContent:'center'
    },
    body: {
        width:'100%',
        height: '100%',
        // display: 'flex',
        // flexDirection:'row',
        // justifyContent:'center', 
        // paddingTop:50 
    },
    container: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:180,
        borderBottomColor:'#ccc',
        // borderTopColor:'green',
        borderBottomWidth:1,
        borderTopWidth:0,
        borderStyle:'solid'
      },
    subContainer: {
        height:'60%',
        width:'90%',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'row'
       },
       image: {
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