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
    vendors: {
        width:'90%',height:'90%', 
        

  
    },
    centerElement: {justifyContent: 'center', alignItems: 'center'},
});