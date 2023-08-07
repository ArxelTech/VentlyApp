import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    parent: {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        // flex: 1,
        height: '100%',
        width: '100%',
    },
    child: {
        height: '100%',
        width: '100%',
    },
    main_cont: {
        width:'100%',
        height:'13%',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:30,

    },
    sub_cont: {
        width:'30%',
        height:'100%',
        marginTop:10,
        padding: 0,
        marginLeft:10,
        display:'flex', alignItems:'center', justifyContent:'center',
    },
    body: {
        width:'100%',
        height: '100%',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center', 
        // borderTopWidth: 2, borderColor:'#ccc',
        elevation:1
    },
    bodyContaner: {
        width:'90%',
        height:'100%',
    },
    theme: {
        // backgroundColor:'pink',
        height:65,
        marginTop:5,
        marginBottom:5,
        display:'flex',
        flexDirection:'row'
    },
    settings: {
        // backgroundColor:'pink',
        height:68,
        paddingTop:5,
        display:'flex',
        flexDirection:'row'
    },
    toggle: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});