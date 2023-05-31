import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    main_Container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FCFCFC',
        padding:10
    },
    child: {
        height: '80%',
        // width: '90%',
    },
    image: {
        borderRadius:6,
    },
    title: {
        height:50,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        flex:5,
        width:'50%',
    },
    button: {
        height:30,
        flex:2,
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
    price: {
        height:'100%',
        flex:2,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    description: {
        paddingTop:20,
        paddingBottom:20
    },
    featured: {
        
    },
    ftVideo: {
        paddingTop:20,
        paddingBottom:20
    },
    ftImage: {
        paddingTop:20,
        paddingBottom:20,
        display: 'flex',
        flexDirection:'row'
    },
    location: {
        paddingTop:20,
        paddingBottom:20,   
    },
    locationImg: {
        height:200, 
        width:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      
    },
    locationBtn: {
        width:'80%',
        height:50
    },
    locationBG: {
        backgroundColor:'#000000c0', width:'100%', height:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    transparentBtn: {
        height:'20%',
        width:'90%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    centerElement: {justifyContent: 'center', alignItems: 'center'},
    host: {
        height: 100, width:'100%', 
        display: 'flex',flexDirection:'row', 
        justifyContent:'center', alignItems:'center',
        
    },
    Verify: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    hostDtls: {
         padding:10, 
    }
   
    
});