import {useContext} from 'react';
import {UsersContext} from '../contexts/UsersProvider';

function useUsers() {
  return useContext(UsersContext);
}

export {useUsers};
