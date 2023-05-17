import React, {createContext, useEffect, useState} from 'react';
import {UserDTO} from '../dtos/UserDTO';
import {USERS_STORAGE_KEY} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {apiCall} from '../services/api';
import { useEventLog } from '../hooks/useEventLog';
interface UsersContextData {
  users: UserDTO[];
  addUser: (
    login: string,
    successCallback?: () => void,
    errorCallback?: () => void,
  ) => Promise<void>;
  removeUser: (id: number) => Promise<void>;
  loadingUsers: boolean;
}

interface UsersProviderData {
  children: React.ReactNode;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

function UsersProvider({children}: UsersProviderData) {
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const {sendErrorEvent} = useEventLog();

  async function getStorageUsers() {
    try {
      const storageUsers = await AsyncStorage.getItem(USERS_STORAGE_KEY);
      if (storageUsers) {
        setUsers(JSON.parse(storageUsers) as UserDTO[]);
      }
      setLoadingUsers(false);
    } catch (error) {
      sendErrorEvent('Error on get storaged users', error);
    }
  }

  useEffect(() => {
    getStorageUsers();
  }, []);

  function checkUserAlreadyAdded(login: string) {
    return users.some(user => user.login === login);
  }

  async function addUser(
    login: string,
    successCallback?: () => void,
    errorCallback?: () => void,
  ): Promise<void> {
    try {
      if (!checkUserAlreadyAdded(login)) {
        const githubResponse = await apiCall<UserDTO>({
          url: `users/${login}`,
          method: 'GET',
        });

        if (githubResponse.success) {
          const newUserList = [...users, githubResponse.data];
          setUsers(newUserList);
          await AsyncStorage.setItem(
            USERS_STORAGE_KEY,
            JSON.stringify(newUserList),
          );
          if (successCallback) {
            successCallback();
          }
        } else {
          Alert.alert('Erro', githubResponse.message);
          if (errorCallback) {
            errorCallback();
          }
        }
      } else {
        Alert.alert('Atenção', 'Esse usuário ja foi adicionado');
        if (errorCallback) {
          errorCallback();
        }
      }
    } catch (error) {
      sendErrorEvent('Error on set user in storage', error);
    }
  }

  async function removeUser(id: number): Promise<void> {
    try {
      const filteredUsers = users.filter(user => user.id !== id);
      setUsers(filteredUsers);
      await AsyncStorage.setItem(
        USERS_STORAGE_KEY,
        JSON.stringify(filteredUsers),
      );
    } catch (error) {
      sendErrorEvent('Error on remove user from storage', error);
    }
  }

  return (
    <UsersContext.Provider value={{users, addUser, removeUser, loadingUsers}}>
      {children}
    </UsersContext.Provider>
  );
}

export {UsersProvider, UsersContext};
