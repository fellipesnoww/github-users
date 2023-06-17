import React, { useEffect } from 'react';
import {Container, UserList} from './styles';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import {useUsers} from '../../hooks/useUsers';
import {useNavigation} from '@react-navigation/native';
import EmptyList from '../../components/EmptyList';
import {View} from 'react-native';

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
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <UserCard user={item} />}
        ListEmptyComponent={
          <EmptyList message="Você ainda não adicionou nenhum usuário" />
        }
      />
    </Container>
  );
}
