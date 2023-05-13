import React from 'react';
import {Container, UserList} from './styles';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import {useUsers} from '../../hooks/useUsers';

export default function Home() {
  const {users} = useUsers();

  return (
    <Container>
      <Header />
      <UserList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => <UserCard user={item} />}
      />
    </Container>
  );
}
