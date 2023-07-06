import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({

    main_cont: {
        height:'100%', width:'100%',position:'absolute', 
        zIndex:999, backgroundColor:'#000000c0'
    },
    sub_cont : {
        height:'55%', width:'100%', 
        backgroundColor:'transparent',
        opacity:10, zIndex:999
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:40
    },
    centerElement: {justifyContent: 'center', alignItems: 'center'},
    card: {
        height:'45%', width:'100%', backgroundColor:'#FFFFFF', borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, padding:5, display:'flex',flexDirection:'row', 
        justifyContent:'center', alignItems:'center',
    },
    container: {
        height:'90%', width:'90%',display:'flex',flexDirection:'row', 
        justifyContent:'center', alignItems:'center',
    },
    userImg: {
        display:'flex', alignItems:'center', position:'absolute', 
        borderRadius: 100,
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'#FFFFFF',
        zIndex:9,
        top:'110%',
        left:'35%'   
    },
    userImg1: {
        display:'flex', alignItems:'center', position:'absolute', 
        borderRadius: 100,
        borderStyle:'solid',
        borderWidth:2,
        borderColor:'#FFFFFF',
        zIndex:9,
        top:'110%',
        left:'48%'  
    },
    options: {
     width: '100%',
     height: '60%',
     display:'flex'
    },
    inviteTitle: {
        display:'flex', justifyContent:'flex-end', alignItems:'center',
        height:'55%',
    },
    eventDtls: {
        display:'flex', justifyContent:'center', alignItems:'center',
        height:'25%'
    },
    buttons: {
        display:'flex', justifyContent:'space-evenly', alignItems:'center', flexDirection:'row',
        height:'50%',
        width: '100%',
    },
    btn: {
        width:'40%',
        height:45,
    },
    btnGrey: {
        width:'40%',
        height:45,
        backgroundColor:'#DCDCDC',
        borderRadius:6
    },
    flex: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },
    outlinedBtn: {
        display:'flex', flexDirection:'row',
        height:45,
        backgroundColor:'transparent',
        borderRadius:6,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        paddingLeft:20,
        paddingRight:20

    }
})