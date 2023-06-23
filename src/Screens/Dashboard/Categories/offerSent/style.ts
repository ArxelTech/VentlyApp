import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    parent: {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        // flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#FCFCFC'
    },
    child: {
        height: '100%',
        width: '100%',
    },
    main_cont: {
        height:'100%', width:'100%',position:'absolute', 
        zIndex:2, backgroundColor:'#000000c0'
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
        justifyContent:'center', alignItems:'center'
    },
    userImg: {
        display:'flex', alignItems:'center', position:'absolute', 
        flexDirection:'row',justifyContent:'center', top:'80%', width:'100%'
    },
    userDtls: {
        height:'40%', display:'flex', alignItems:'center', 
        justifyContent:'center',
    },
    offerInput: {
        height:'50%', marginTop:-10,
      
    }

});