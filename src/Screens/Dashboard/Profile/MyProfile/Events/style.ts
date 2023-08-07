import { StyleSheet, } from 'react-native';

export const Styles = StyleSheet.create({
  main_Container: {
    // backgroundColor:'#ccc',
    height:'100%'
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

})