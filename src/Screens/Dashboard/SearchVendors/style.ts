import { StyleSheet } from 'react-native';


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
        width:'100%',
        height:'15%',
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
        paddingTop:40
    },
    sub_cont: {
        width:'30%',
        height:'100%',
        marginTop:10,
        padding: 0,
        marginLeft:10,
        display:'flex', alignItems:'center', justifyContent:'center',
    },
    imageBox: {
        backgroundColor:'#FFFFFF',borderStyle:'solid',
        borderWidth: 1, borderColor:'#F2F2F2',
        height: 100, width:100, display:'flex', 
        alignItems:'center', justifyContent:'center'
    },
    body: {
        width:'100%',
        height: '100%',
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center', 
        paddingTop:50 
    }
});