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
}

const theme = createTheme({
    colors: {
        brandColor: colorPallette.brandColor,
        whiteAccentColor: colorPallette.whiteAccentColor,
        white: colorPallette.white,
        black: colorPallette.black,
        textInputBackground: colorPallette.textInputBackgroundColor,
        darkGrey: colorPallette.darkGrey,
        backgroundColor: colorPallette.white,
        accentColor: colorPallette.whiteAccentColor,
        deactivatedColor: colorPallette.deactivatedColor,
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
    header: {
      fontFamily: 'PoppinsBold',
      fontWeight: 'bold',
      fontSize: 34,
      lineHeight: 42.5,
      color: colorPallette.black,
    },
    subheader: {
      fontFamily: 'PoppinsRegular',
      fontWeight: '600',
      fontSize: 22,
      lineHeight: 36,
      color: colorPallette.black,
    },
    body: {
      fontFamily: 'Heebo',
      fontSize: 18,
      lineHeight: 24,
      color: colorPallette.black,
    },
    xs: {
        fontFamily: 'Heebo',
        fontSize: 14,
        lineHeight: 24,
        color: colorPallette.black,
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
    },
    textVariants: {
        header: {
        fontFamily: 'PoppinsBold',
        fontWeight: 'bold',
        fontSize: 34,
        lineHeight: 42.5,
        color: colorPallette.white,
        },
        subheader: {
        fontFamily: 'PoppinsRegular',
        fontWeight: '600',
        fontSize: 22,
        lineHeight: 36,
        color: colorPallette.white,
        },
        body: {
        fontFamily: 'Heebo',
        fontSize: 18,
        lineHeight: 24,
        color: colorPallette.white,
        },
        xs: {
            fontFamily: 'Heebo',
            fontSize: 14,
            lineHeight: 24,
            color: colorPallette.white,
        },
  },
}

export default theme;
export type Theme = typeof theme;