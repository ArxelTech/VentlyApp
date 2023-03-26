import { View, Text } from 'react-native'
import React from 'react'
import Authentication from './Authentication'
import Dashboard from './Dashboard';
import { ThemeProvider } from '@shopify/restyle'
import theme from '../Theme/theme';

const Navigation = () => {
  // these will be replaced by global state values
  const loggedIn = false;
  const darkTheme = false
  return (
    <ThemeProvider theme={darkTheme ? darkTheme : theme}>
       {loggedIn && <Dashboard />}
       {!loggedIn &&  <Authentication />}
    </ThemeProvider>
  )
}

export default Navigation