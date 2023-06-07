import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components';

import {APP_THEME} from './src/global/styles/theme';
import Routes from './src/routes';
import {UsersProvider} from './src/contexts/UsersProvider';
import * as Sentry from '@sentry/react-native';
import crashlytics from '@react-native-firebase/crashlytics';

Sentry.init({ 
  dsn: 'https://79b659b980e94e60bd6dbeee92a7c0bf@o4505196482527232.ingest.sentry.io/4505196482592768',
});

function App(): JSX.Element {
  return (
    <ThemeProvider theme={APP_THEME}>
      <UsersProvider>
        <Routes />
      </UsersProvider>
    </ThemeProvider>
  );
}

export default Sentry.wrap(App);
