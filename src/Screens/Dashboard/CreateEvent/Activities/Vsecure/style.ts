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
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
},
tableContainer: {
    width:'90%',
    height:'90%',
},
subContainer: {
    height:'15%'
},
bin: {
 flex:1
},
edit: {
 flex:1
},
addUser: {
    // backgroundColor:'green',
    height:'40%'
},
input: {
  flex: 4,
  justifyContent:'center',
  alignItems:'center',
  height:'100%',
  paddingTop:10,
  paddingBottom:10,
//   backgroundColor:'yellow'
},
doneBtn: {
    flex:1.5,
    // backgroundColor:'#ccc',
    padding:10,
    paddingTop:20,
    paddingBottom:20,
    height:'100%',
},
border: {
    borderRadius:5,
    borderWidth:1,
    borderColor:'black',
    height:52,
    width:'100%' 
}
});