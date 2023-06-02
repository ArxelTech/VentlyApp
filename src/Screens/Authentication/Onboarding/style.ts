import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    parent: {
        flex: 1,
    },
    iconBox: {
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    sliderConatainer: {
        width: '100%',
        height: '50%',
    },
    indicatorContainer: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    textContainer: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

});