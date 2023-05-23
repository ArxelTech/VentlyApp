import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    main_Container: {
        width: '100%',
        height: '100%',
        paddingRight:20,
        backgroundColor: '#FCFCFC'
    },
    parent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
    },
    child: {
        height: '80%',
        width: '90%',
    },
    image: {
        height:200, width:'100%' ,
        borderRadius:6 
    },
    commentSession: {
        width:'100%',
    },
    addComment: {
        width:'100%',
        height:'100%',
        zIndex:6,
        position:'absolute',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    commentIcon: {
        width:60,
        height:60,
        backgroundColor:'#FF406E',
        borderRadius:100
    },
    comment: {
        padding:50
    }
    
    
});