import React from 'react';

import {ThemeProvider} from 'styled-components';

import {APP_THEME} from './src/global/styles/theme';
import Home from './src/screens/Home';
import Repository from './src/screens/Repository';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={APP_THEME}>
      <Repository />
    </ThemeProvider>
  );
}

export default App;
