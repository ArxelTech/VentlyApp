import { StatusBar, StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

        parent: {
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            flex: 1,
            height: '100%',
            width: '100%',
            backgroundColor: '#FFFFFF',
            
        },
        child: {
            height: '100%',
            width: '100%',
            // backgroundColor:'yellow'
        },
        main_cont: {
            width:'100%',
            height:'15%',
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'center',
            // backgroundcolor: 'green',
            // padding:30,
            
        },
            header: {
                display: 'flex',
                flexDirection: 'row',
                width: '90%',
                height: '100%',
                alignItems: 'flex-end',
                // justifyContent: '',
                // marginTop:20,
                // backgroundColor:'red'
            },
            container: {
                flex: 1,
              },
              tabBar: {
                flexDirection: 'row',
                paddingTop: StatusBar.currentHeight,
              },
              tabItem: {
                flex: 1,
                alignItems: 'center',
                padding: 16,
              },
        
        tabContainer: {
          // backgroundColor:'yellow',
          height:'75%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'row',
          
        },
        bottomTab: {
          // backgroundColor:'indigo',
          height:'10.5%',
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-evenly',
          // shadowColor: '#171717',
          // shadowOffset: {width: -2, height: 4},
          // shadowOpacity: 0.2,
          // shadowRadius: 3,
        },
        btnfill: {
          padding:10 ,
          borderRadius:10, backgroundColor:'#FF406E', 
          flex:1, alignItems:'center',justifyContent:'center'            
        },
        btnOutline: {
          padding:10 ,
          borderWidth:2, borderStyle:'solid',
          borderRadius:10, borderColor:'#FF406E', 
          flex:1, alignItems:'center',justifyContent:'center'             
        },
        PostBtn: {
          height:'60%',
          width:'30%'
        },
});