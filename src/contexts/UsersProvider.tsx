import React, {createContext, useEffect, useState} from 'react';
import {UserDTO} from '../dtos/UserDTO';
import {USERS_STORAGE_KEY} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiCall} from '../services/api';
import {Alert} from 'react-native';

interface UsersContextData {
  users: UserDTO[];
  addUser: (login: string) => Promise<void>;
  removeUser: (id: number) => Promise<void>;
}

interface UsersProviderData {
  children: React.ReactNode;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

function UsersProvider({children}: UsersProviderData) {
  const [users, setUsers] = useState<UserDTO[]>([]);

  async function getStorageUsers() {
    const storageUsers = await AsyncStorage.getItem(USERS_STORAGE_KEY);
    if (storageUsers) {
      setUsers(JSON.parse(storageUsers) as UserDTO[]);
    }
  }

  useEffect(() => {
    getStorageUsers();
  }, []);

  function checkUserAlreadyAdded(login: string) {
    return users.some(user => user.login === login);
  }

  async function addUser(login: string): Promise<void> {
    if (!checkUserAlreadyAdded(login)) {
      const githubResponse = await apiCall<UserDTO>({
        baseURL: `users/${login}`,
        method: 'GET',
      });

      if (githubResponse.success) {
        setUsers([...users, githubResponse.data]);
        await AsyncStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      } else {
        Alert.alert('Erro', githubResponse.message);
      }
    } else {
      Alert.alert('Atenção', 'Esse usuário ja foi adicionado');
    }
  }

  async function removeUser(id: number): Promise<void> {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
    await AsyncStorage.setItem(
      USERS_STORAGE_KEY,
      JSON.stringify(filteredUsers),
    );
  }

  return (
    <UsersContext.Provider value={{users, addUser, removeUser}}>
      {children}
    </UsersContext.Provider>
  );
}

export {UsersProvider, UsersContext};
