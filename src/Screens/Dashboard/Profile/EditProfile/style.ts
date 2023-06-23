import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    main_cont: {
        backgroundColor:'#FFFFFF',
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },
    child: {
        width:'90%',
        height:'100%',
        
    },
    header: {
        height:250,
        width:'100%',
        marginTop:15,
    },
    nav: {
        height:80,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
      },
      displayPhoto: {
        display:'flex',
        alignItems:'center',
        height:'60%',
        width:'100%'
    },
    edit:{
        position:'absolute',
        top:'70%',
        left:'5%'
    },
    editInput: {
    width:'100%'
    },
    bottom: {
        
    },
    dropdown: {
        // position: 'absolute',
        // backgroundColor: 'red',
        // color: 'pink',
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderWidth: 0.2,
        height: '30%',
        width: '100%'
        // top: 50,
    },
    listItem: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        height: 72,
        fontSize: 20,
        // backgroundColor: 'blue',
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 10
    }

   
})