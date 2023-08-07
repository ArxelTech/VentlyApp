import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    parent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        // overflow: 'hidden',
        // flex: 1,
        height: '100%',
        width: '100%',
        // backgroundColor: '#FCFCFC'
        // backgroundColor:'red'
    },
    child: {
        height: '100%',
        width: '100%', 
        padding:0, 
        borderRadius:20, 
        borderStyle:'solid',
        borderWidth:1, borderColor:'grey',
    },
    card: {
        height:450, borderRadius:20, 
        backgroundColor:'white'
    },
    profileImg: {
        height:'40%', backgroundColor:'#000000c0', borderTopRightRadius:20, borderTopLeftRadius:20
    },
    blurBG: {
        height:'100%', width:'100%', display:'flex', 
        borderTopRightRadius:20, borderTopLeftRadius:20, 
        justifyContent:'flex-start', alignItems:'center', backgroundColor:'#000000c0',
    },
    userDtls: {
        padding:2, display:'flex',
         justifyContent:'center',
         alignItems:'center'
    },
    name: {
        display:'flex', 
        flexDirection:'row', 
        padding:2, 
        alignItems:'center',
    },
    centerElement: {justifyContent: 'center', alignItems: 'center'},
});