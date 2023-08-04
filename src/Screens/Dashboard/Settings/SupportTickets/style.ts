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
        width: '85%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:40,
        // backgroundColor:'green'
    },
    body: {
        width:'100%',
        height: '90%',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center', 
        alignItems:'center',
        // backgroundColor:'orange'
    },
    bodyContainer: {
        width:'85%',
        height:'85%',
    },
    supportCard: {
        borderRadius: 6,
        borderWidth:1,
        borderColor:'#DCDCDC',
        height:100,
        display:'flex',
        flexDirection:'row',
    }
});