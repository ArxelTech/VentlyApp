import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
   tabBar: {
    display:'flex',
    flexDirection: 'row',
       position: 'absolute',
       bottom: 5,
       left:5,
       right:5,
       elevation: 4,
       backgroundColor:'#F9F9F9',
    //    borderRadius:6,
       height: 80,
       alignItems:'center',
       justifyContent:'center'
       
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
   post: {
   //  backgroundColor:'blue',
    width:60, 
    height:60, 
    position:'absolute', 
    zIndex:999,
    display:'flex',
    flexDirection:'row', 
    alignItems:'flex-start',
    justifyContent:'center', 
   
   },
   postIcon: {
    backgroundColor:'#FF1C52',
    position:'absolute',
    width:60, 
    height:60,  
    display:'flex',
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center', 
    borderRadius:100, 
   }

});