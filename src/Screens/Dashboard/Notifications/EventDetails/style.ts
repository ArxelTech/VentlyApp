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
    imageContainer:{
       backgroundColor:'#000000c0',
       borderRadius:6, 
    },
    image: {
        height:220, width:'100%' ,
        borderRadius:6,
        backgroundColor:'#000000c0',
    },
    commentSession: {
        width:'100%',
        marginTop:30
    },
    logoContainer: {
        position:'absolute',
        zIndex:99,
        top:'10%',
        left:'45%',
        // backgroundColor:'#FFFFFF',opacity:10, 
        width: 50,
        height:50
    },
    logo: {
        width: 40,
        height:40
    },
    goBack: {
        position:'absolute',
        zIndex:99,
        top:'5%',
        left:'5%',
        // backgroundColor:'#ccc',
        width: 150,
        height:30
    },
    eventTitle: {
        position:'absolute',
        zIndex:99,
        top:'20%',
        left:'30%',
        // backgroundColor:'#ccc',
        width: 150,
        height:30
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