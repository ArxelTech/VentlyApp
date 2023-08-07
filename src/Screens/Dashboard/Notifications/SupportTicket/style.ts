import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    flexRow: {
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row'
    },
    flexCol: {
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'column'
    },
    main_cont: {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        // flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#FCFCFC'
        
    },
    container: {
        width:'90%',
        height:'80%',
      
    },
    header: {

    },
     content: {
      height:420,
      // marginTop:30,
      // backgroundColor:'green'
     },
     contentReported: {
      height:85,
      marginTop:10,
      // backgroundColor:'red'
     },
     supportTeam: {
      height:350,
      // backgroundColor:'yellow',
      display:'flex',
      justifyContent:'center'
     },
     contentContainer: {
      // backgroundColor:'#ccc',
      height:'100%',
      borderRadius:8,
      borderWidth:1,
      borderColor:'#ccc'
     },
     contentName: {
      width:'60%',
      height:'100%',
      // backgroundColor:'pink'
     },
     contentImage: {
      width:'40%',
      height:'90%',
      // backgroundColor:'purple'
     },
     supportContainer: {
      backgroundColor:'#DCDCDC',
      height:300,
      borderRadius:8,
     },
     supportHeader: {
      // backgroundColor:'red',
      height:80,
      borderBottomColor:'#ccc',
      borderBottomWidth:1
     },
     supportBottom: {
      height:220,
      // backgroundColor:'green'
     }
     
   
});