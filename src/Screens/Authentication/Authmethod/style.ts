import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('screen').height;

export const Styles = StyleSheet.create({
    parent: {
        flex: 1,
        height: '100%',
    },
    imageBackground: {
        width: '100%',
        height: '40%',
    },
    mask: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.512)'
    },
    iconContainer: {
        width: '100%',
        height: '50%',
        alignItems: "center",
        justifyContent: 'center',
    },
    secondView: {
        width: '100%',
        height: '65%',
        position: 'absolute',
        top: height / 100 * 35,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    buttonContainer: {
        marginTop: 40,
        marginBottom: 20
    }
});