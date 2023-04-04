import React from 'react';

import {View} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {APP_THEME} from './src/global/styles/theme';
import Test from './src/assets/icons/delete.svg';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={APP_THEME}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Test fill="red" width={40} height={40} />
      </View>
    </ThemeProvider>
  );
}

export default App;
