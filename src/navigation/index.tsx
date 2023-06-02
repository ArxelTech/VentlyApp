import React from 'react'
import Authentication from './Authentication'
import Dashboard from './Dashboard';
import { ThemeProvider } from '@shopify/restyle'
import theme from '../Theme/theme';
import { Incubator } from 'react-native-ui-lib';
import useToast from '../hooks/useToast';
import { useIsLoggedIn } from '../states/useLoggedIn';

const {Toast} = Incubator;

const Navigation = () => {
  const { onDismiss,  isVisible, message, position, preset } = useToast();
  const { isLoggedIn } = useIsLoggedIn((state) => state)
  // these will be replaced by global state values
  const darkTheme = false
  return (
    <ThemeProvider theme={darkTheme ? darkTheme : theme}>
       {isLoggedIn && <Dashboard />}
       {!isLoggedIn &&  <Authentication />}
       <Toast
          visible={isVisible}
          autoDismiss={5000}
          onDismiss={onDismiss}
          message={message}
          preset={preset}
          position={position}
        />
    </ThemeProvider>
  )
}

export default Navigation;