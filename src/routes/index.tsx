// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './app.routes';
import {StatusBar} from 'react-native';

function Routes() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <AppRoutes />
    </NavigationContainer>
  );
}

export default Routes;
