import { StyleSheet } from 'react-native';


export const Styles = StyleSheet.create({
    main_Container: {
        width: '100%',
        height: '100%',
        // borderWidth: 2,
        // borderStyle: 'solid',
        backgroundColor: '#FCFCFC'
    },
    centerElement: {justifyContent: 'center', alignItems: 'center'},
    // Title
    EventTitle: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        height: '20%',
    },
    DynamicHeader: {
        height: 50, 
        marginTop: 20, 
        display:'flex',
        flex:1, 
        flexDirection: 'row', 
	    alignItems:'flex-start',
        justifyContent: 'center',
    },
    conditionedHeader: {
        height: 50,
        marginTop: 20,
        display:'flex',
        flex:5, 
	    alignItems:'flex-start',
        justifyContent: 'flex-start'
    },
    title_1: {
        width:'110%', 
        zIndex:10, 
        position:'absolute', 
        marginTop:'10%', 
        marginLeft: -45, 
        display:'flex', 
        flexDirection:'row',
    },
    skipBtn: {
        width: '50%', display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'center',
		alignItems: 'center',
    },
    skipBtn1: {
        left: 15, width: 80, height: 30, 
        backgroundColor: 'transparent', elevation: 0, 
        borderRadius: 20, borderStyle: 'solid', borderWidth: 1
    },
    loader: {
        height: 6, 
        backgroundColor: '#FF406E', 
        width: '20%', position: 'absolute', 
        zIndex: 10
    },
    Dloader: {
        flexDirection: 'row', 
        width: '100%', 
        position: 'relative', 
        zIndex: 20
    },
    // Create New Event
    cameraBox: {
        height: 250, 
        width: '100%', 
        display: 'flex', flexDirection: 'row', 
        justifyContent:'center', alignItems:'center',
    },
    Box: {
        width: '90%', height: '80%',  display: 'flex', 
        alignItems: 'center', justifyContent:'center', borderWidth: 1, 
        borderStyle:'solid', borderColor:'lightgrey' 
    },
    DatePicker: {
        display:'flex', justifyContent: 'center', alignItems: 'center',
        borderColor:'#ECECEC', borderWidth: 1, borderRadius:10, 
        backgroundColor: '#F5F5F5', width:'100%', height:60, elevation: 0
    },
    DatePicker1: {
        display: 'flex', flexDirection: 'row',
		justifyContent:'center', alignItems:'center', width:'100%'
    },
   // SetUpTickets Styles
    SetupTickets: {
        backgroundColor:'transparent', padding:20, marginTop:15, display:'flex', 
        flexDirection:'row', justifyContent:'center',
    },

    header: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
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
    header1: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        width: '100%',
        // backgroundColor: 'yellow'
    },
    image: {
        // backgroundColor: 'green',
        height: '40%'
    },
    dropdown: {
    //   backgroundColor: 'red',
      padding: 20
    } 
});