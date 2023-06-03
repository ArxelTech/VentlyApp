import { createTheme } from '@shopify/restyle'

export const colorPallette = {
    brandColor: '#FF406E',
    whiteAccentColor: '#EFEFEF',
    white: '#ffffff',
    black: '#1A1A1A',
    blackAccentColor: '#707070',
    textInputBackgroundColor: '#F5F5F5',
    darkGrey: '#707070',
    deactivatedColor: '#E61648',
    inputBackground: '#F5F5F5',
    grey: 'grey',
}

const theme = createTheme({
    colors: {
        brandColor: colorPallette.brandColor,
        whiteAccentColor: colorPallette.whiteAccentColor,
        white: colorPallette.white,
        black: colorPallette.black,
        textInputBackground: colorPallette.inputBackground,
        darkGrey: colorPallette.darkGrey,
        backgroundColor: colorPallette.white,
        accentColor: colorPallette.whiteAccentColor,
        deactivatedColor: colorPallette.deactivatedColor,
        textColor: colorPallette.black,
        grey: colorPallette.grey,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 20,
        xl: 32
    },
    breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    default: {
      fontFamily: 'Heebo',
      fontSize: 18,
      lineHeight: 24,
      color: 'black'
    },
    header: {
      fontFamily: 'satoshi-bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: 'black',
    },
    subheader: {
      fontFamily: 'satoshi-medium',
      fontSize: 22,
      lineHeight: 36,
      color: 'black',
    },
    body: {
      fontFamily: 'satoshi-regular',
      fontSize: 18,
      lineHeight: 24,
      color: 'grey',
    },
    xs: {
        fontFamily: 'satoshi-light',
        fontSize: 16,
        lineHeight: 24,
        color: 'grey',
      },
  },
})

export const darkTheme: Theme = {
    ...theme,
    colors: {
        ...theme.colors,
        backgroundColor: colorPallette.black,
        accentColor: colorPallette.blackAccentColor,
        deactivatedColor: colorPallette.deactivatedColor,
        textColor: colorPallette.white,
    },
    textVariants: {
      default: {
        fontFamily: 'Heebo',
        fontSize: 18,
        lineHeight: 24,
        color: 'white',
      },
        header: {
        fontFamily: 'satoshi-bold',
        fontSize: 34,
        lineHeight: 42.5,
        color: 'white',
        },
        subheader: {
        fontFamily: 'satoshi-medium',
        fontSize: 22,
        lineHeight: 36,
        color: 'white',
        },
        body: {
        fontFamily: 'satoshi-regular',
        fontSize: 18,
        lineHeight: 24,
        color: 'white',
        },
        xs: {
            fontFamily: 'satoshi-light',
            fontSize: 14,
            lineHeight: 24,
            color: 'white',
        },
  },
}


export default theme;
export type Theme = typeof theme;

// for react native ui lib

import {Typography, Colors, ThemeManager} from 'react-native-ui-lib';

export function InitFunction() {
    Colors.loadColors({
      brandColor: '#FF406E',
      whiteAccentColor: '#EFEFEF',
      white: '#ffffff',
      black: '#1A1A1A',
      blackAccentColor: '#707070',
      textInputBackgroundColor: '#F5F5F5',
      darkGrey: '#707070',
      deactivatedColor: '#E61648',
      inputBackground: '#F5F5F5',
    });
    Typography.loadTypographies({
        header: {
            fontSize: 28,
            fontWeight: '500',
            fontFamily: 'satoshi-bold',
            color: 'black',
        },
        light: {
            fontSize: 17,
            fontFamily: 'satoshi-light',
            color: Colors.bodyTextGrey
        },
         regular: {
            fontSize: 18,
            fontFamily: 'satoshi-regular',
            color: Colors.bodyTextGrey

        },
        medium: {
            fontSize: 20,
            fontFamily: 'satoshi-medium',
            color: 'black'
        },
         semibold: {
            fontSize: 20,
            fontFamily: 'satoshi-medium',
            color: 'black'
        },
    });
}