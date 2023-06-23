import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    main_cont: {
        backgroundColor:'#FFFFFF',
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',  
    },
    child: {
        width:'100%',
        height:'100%',
        // backgroundColor:'red'
    },
    header: {
        width:'100%',
        // backgroundColor:'orange'
    },
    nav: {
        height:100,
        width:'100%',
        backgroundColor:'#FBFBFB',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:30,
        paddingTop:40,
        elevation:10
      },
      icon: {
        width:'40%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:10
      },
      text: {
        width:'60%',
        height:'100%',
        
      },
      notify: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'#ccc',
        height:500,
        width:'100%', 
    },
    notNotify: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:500,
        width:'100%', 
    },
    notifyBox: {
        backgroundColor:'#FFFFFF',
        height:150,
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderStyle:'solid',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#ccc',
        marginTop:2
    },
    flexBox: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    iconContainer: {
        width:'25%',
        height:140,
        // backgroundColor:'red'
    },
    message: {
        width:'75%',
        paddingRight:20,
        // backgroundColor:'blue'
    },
    miniCard: {
        width:60,
        height:60,
        // backgroundColor:'indingo',
        // backgroundColor:'#FF6B8808',
        borderRadius:8
    },
    time: {
        width:'85%', height:'20%',
        position:'absolute',
        top:'80%'
    }
    

   
})