import React from 'react';
import {Container, UserList} from './styles';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import {useUsers} from '../../hooks/useUsers';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const {users} = useUsers();
  const navigation = useNavigation();

  function handleNavigateToModalRegister() {
    navigation.navigate('ModalRegister');
  }

  return (
    <Container>
      <Header
        buttonAction={handleNavigateToModalRegister}
        textButton="Adicionar novo"
      />
      <UserList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => <UserCard user={item} />}
      />
    </Container>
  );
}
