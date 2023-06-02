import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
 flexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
 },
 flexCol: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
 },
 main_con: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
},
container: {
  height:'80%',
  width:'100%'
},
title: {
    height:'40%',
    width:'100%',
    paddingTop:70,
},
img: {
  paddingBottom:30,
  width: 30, height: 30 
},
text: {
    marginTop:10,
    paddingLeft:20,
    paddingRight:20
},
subtext: {
    
    paddingLeft:20,
    paddingRight:20
},
image: {
    height:'40%',
    width:'100%',
},
hugoImg: {
    height:200,
    width:200
},
btn: {
    height:'30%',
    width:'100%'
},
btnFill: {
    height:70,
    width:'90%',
    padding:10
}, 
btnTransparent: {
    height:70,
    width:'90%',
    padding:10,
}  
   
});