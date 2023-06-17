import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Register from '../screens/Register';
import Repository from '../screens/Repository';
import ModalRegister from '../screens/Register/ModalRegister';
import {useUsers} from '../hooks/useUsers';
import {RootStackParamList} from '../types/routes/stack';
import Loader from '../components/Loader';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppRoutes() {
  const {users, loadingUsers} = useUsers();

  const initialRouteName = users.length > 0 ? 'Home' : 'Register';

  if (loadingUsers) {
    return <Loader message="Buscando informações" />;
  }

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Repository" component={Repository} />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="ModalRegister" component={ModalRegister} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default AppRoutes;
