import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    main_Container: {
        width: '100%',
        height: '100%',
        // borderWidth: 2,
        // borderStyle: 'solid',
        backgroundColor: '#FCFCFC'
    },
    parent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        // flex: 1,
        height: '100%',
        width: '100%',
        // backgroundColor: '#ff0000'
    },
    child: {
        height: '80%',
        width: '90%',
        // marginTop: '10%',
        // backgroundColor: '#ccc'
    },
    details: {
        backgroundColor:'red'

    },
    title: {
        // height:60,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10

    },
    text: {
        flex:5,
        // backgroundColor:'red'
    },
    button: {
        height:'100%',
        // width:'90%',
        flex:2,
        // backgroundColor:'blue',
        padding:5
    },
    icon: {
        height:'100%',
        flex:0.5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:5,

    },
    date: {
     flex:4
    },
    price: {
        height:'100%',
        flex:2,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    description: {
        padding:20
    },
    featured: {
        
    }
   
    
});