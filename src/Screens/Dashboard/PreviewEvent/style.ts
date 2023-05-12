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
            height: '90%',
            width: '100%',
        },
        main_cont: {
            width:'100%',
            height:'15%',
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor: 'green'
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

});