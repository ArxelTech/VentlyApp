import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
   // tabbar
   tabBar: {
    display:'flex',
    flexDirection: 'row',
       position: 'absolute',
       bottom: 5,
       left:5,
       right:5,
       elevation: 4,
      //  backgroundColor:'#F9F9F9',
       backgroundColor:'#F1F1F3',
       //borderRadius:6,
       height: 80,
       alignItems:'center',
       justifyContent:'center',
       boxShadow: '#0000000D',
       opacity: 1,
      // box-shadow: 0px -3px 4px #0000000D;
      // backdrop-filter: blur(10px);
      // -webkit-backdrop-filter: blur(10px);
      zIndex:99
       
   },
   tabBarbtn: {
    display:'flex', justifyContent:'center',alignItems:'center',
    width:50,height:50,
   },
   tabsContainer: {
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center', 
    width:'100%',
    height:'100%',
    padding:10,
    paddingBottom:30
   },
   icon: {
    width:20,
    height:20,
   },
   // center create event button
   post: {
    backgroundColor:'#DC5576',
    width:80, 
    height:80, 
    position:'absolute', 
    zIndex:-999,
    display:'flex',
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100, 
    top:'84%',
    left:'39%',
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    
   },
   postIcon: {
   //  backgroundColor:'#FF1C52',
   //  backgroundColor:'#ccc',
    position:'absolute',
    width:60, 
    height:60,  
    display:'flex',
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center', 
   //  borderRadius:100, 
    paddingTop:40
   }
});

