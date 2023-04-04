import React from 'react';

import {ThemeProvider} from 'styled-components';

import {APP_THEME} from './src/global/styles/theme';
import Home from './src/screens/Home';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={APP_THEME}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
