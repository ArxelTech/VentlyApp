import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    main_cont: {
        backgroundColor:'#FFFFFF',
        height:600,
        width:'100%',
        position:'absolute',
        zIndex:999,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },
    child: {
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // padding: 100,
        paddingTop:100
    }
})