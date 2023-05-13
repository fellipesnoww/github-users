import React from 'react';

import {ThemeProvider} from 'styled-components';

import {APP_THEME} from './src/global/styles/theme';
import Routes from './src/routes';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={APP_THEME}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
