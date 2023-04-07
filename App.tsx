import React from 'react';

import {ThemeProvider} from 'styled-components';

import {APP_THEME} from './src/global/styles/theme';
import Users from './src/screens/Home';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={APP_THEME}>
      <Users />
    </ThemeProvider>
  );
}

export default App;
