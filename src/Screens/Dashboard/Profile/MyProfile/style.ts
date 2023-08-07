import { backgroundColor } from "@shopify/restyle";
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  main_container: {
    height:'100%',
    backgroundColor:'#FFFFFF'
  },
  header: {
    backgroundColor:'#2E2E2E',
    height: 450,
  },
  nav: {
    backgroundColor:'transparent',
    height:100,
    width:'100%',
    position:'absolute',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:20

  },
  footer: {
    backgroundColor:'#000000c0',
    height:100,
    width:'100%',
    position:'absolute',
    top:'78%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  footerContainer: {
    width:'95%',
    height:'90%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
  },
  userDtls: {
    height:'100%',
    width:'55%',
  },
  followBtn: {
    height:'100%',
    width:'45%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  outline: {
   width:'60%',
   height:'50%',
   borderStyle:'solid',
   borderWidth:1,
   borderColor:'#FFFFFF',
   borderRadius:4
  },
  fill: {
   height:'50%',
   width:'30%',
   borderStyle:'solid',
   borderWidth:1,
   backgroundColor:'#FFFFFF',
   borderRadius:4,
   display:'flex', 
   justifyContent:'center',
   alignItems:'center'
  },
  name: {
    display:'flex',
    flexDirection:'row',
    height:30,
},
verifyContainer: {
    display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'center',padding:6,paddingTop:15
},
profileDtls: { 
    height:60, 
    width:'100%',
    zIndex:-10
},
bio: {
    height:100,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
},
featuredPhotos: {
    // height:200,
    // backgroundColor:'#FFFF00',
    paddingLeft:20
},

ftImage: {
    paddingTop:5,
    paddingBottom:20,
    display: 'flex',
    flexDirection:'row'
},
tab :{
    height:500,
    // backgroundColor:'#FFFF00',

},
tabContainer: {
    // backgroundColor:'yellow',
    height:'200%',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
//   MIniModal

MiniModal: {
    position:'absolute',
    zIndex:999,
    backgroundColor:'#FFFFFF',
    width:120,
    height:120,
    borderRadius:10,
    top:'95%',
    left:'62%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    elevation:6
},
// PrivateAccount
privateAcct: {
  height:180,
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
},
pTitle: {
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
}
})
