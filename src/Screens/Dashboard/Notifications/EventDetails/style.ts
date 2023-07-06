import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    main_Container: {
        width: '100%',
        height: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // padding:10,
        backgroundColor: '#FCFCFC'
    },
    container: {
        height: '80%',
        width: '90%',
        // backgroundColor:'yellow'
    },
    image: {
        height:220, width:'100%' ,
        borderRadius:6 
    },
    commentSession: {
        width:'100%',
        marginTop:30
    },
   
    commentIcon: {
        position:'absolute',
        zIndex:999,
        width:70,
        height:70,
        backgroundColor:'#FF406E',
        borderRadius:100,
        borderWidth:2,
        borderColor:'white',
        top:'33%',
        left:'40%'

    },
    comment: {
        padding:50
    }
    
    
});