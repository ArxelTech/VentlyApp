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
eventID: { 
    height:'15%',
    width:'100%',
},
team: {
    height:'15%',
    width:'100%'
},
table: {
    height: '40%',
    width: '100%',
    backgroundColor:'red',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
},
tableContainer: {
    width:'90%',
    height:'90%',
},
subContainer: {
    backgroundColor: 'green',
    height:'15%'
},
bin: {
 flex:1
},
edit: {
 flex:1
}




   
});