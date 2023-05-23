import { StatusBar, StyleSheet } from 'react-native';

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
            // backgroundColor: 'green',
            padding:30,
            
        },
            header: {
                display: 'flex',
                flexDirection: 'row',
                width: '90%',
                height: '100%',
                alignItems: 'center',
                // justifyContent: '',
                marginTop:20
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
          height:'73%'
        },
        bottomTab: {
          // backgroundColor:'indigo',
          height:'12%',
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-evenly',
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        },
        PostBtn: {
          height:'60%',
          width:'35%'
        },
        transparentBtn: {
          height:'60%',
          width:'35%'
        }
});