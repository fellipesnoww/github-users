import React from 'react';

import {ThemeProvider} from 'styled-components';

import {APP_THEME} from './src/global/styles/theme';
import Routes from './src/routes';
import {UsersProvider} from './src/contexts/UsersProvider';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={APP_THEME}>
      <UsersProvider>
        <Routes />
      </UsersProvider>
    </ThemeProvider>
  );
}

export default App;
