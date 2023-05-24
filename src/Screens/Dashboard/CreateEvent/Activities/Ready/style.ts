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
    padding:10,
    paddingTop:50,
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
 paddingLeft:5,
 paddingRight:5
},
share: {
    
    height:'40%',
    width:'100%',
},
btn: {
    height:'30%',
    width:'100%'
},
sharebtn: {
    height:70,
    width:'90%',
    padding:10,
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
},
btnBorder: {
    borderWidth:1,
     borderRadius:6
}  

   
});