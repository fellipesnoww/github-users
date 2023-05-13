// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Repository from '../screens/Repository';

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Repository" component={Repository} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
