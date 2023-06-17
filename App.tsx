import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components';

import {APP_THEME} from './src/global/styles/theme';
import Routes from './src/routes';
import {UsersProvider} from './src/contexts/UsersProvider';
import * as Sentry from '@sentry/react-native';
import JailMonkey from 'jail-monkey';
import RNBootSplash from 'react-native-bootsplash';
import {BackHandler} from 'react-native';
import {SENTRY_DNS} from '@env';

Sentry.init({
  dsn: SENTRY_DNS,
});

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({duration: 1000, fade: true});
  }, []);

  if (__DEV__ && JailMonkey.isJailBroken()) {
    BackHandler.exitApp();
  }

  return (
    <ThemeProvider theme={APP_THEME}>
      <UsersProvider>
        <Routes />
      </UsersProvider>
    </ThemeProvider>
  );
}

export default Sentry.wrap(App);
