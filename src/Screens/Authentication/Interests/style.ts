import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 100

        // backgroundColor: '#ff0000'
    },
    child: {
        height: '100%',
        width: '90%',
        marginTop: '30%'
        // backgroundColor: '#ccc'
    },
    iconContainer: {
        width: '100%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    interests: {
        flex: 1,
    },
    childContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 30
    },
    childContainer_B: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
        // justifyContent: 'space-evenly'
    },
    childContainer_C: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
        // justifyContent: 'space-evenly'
    },
    btn_A: {
        padding: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: 6,
        borderRadius: 6,
        marginRight: 20,
        marginBottom: 20
    },
});