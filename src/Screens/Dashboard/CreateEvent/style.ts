import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
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
        marginTop: '10%',
        // backgroundColor: '#ccc'
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