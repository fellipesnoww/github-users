import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {APP_THEME} from '../src/global/styles/theme';
import {NavigationContainer} from '@react-navigation/native';

function AllProvidersMock({children}) {
  return (
    <ThemeProvider theme={APP_THEME}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
}

export {AllProvidersMock};
