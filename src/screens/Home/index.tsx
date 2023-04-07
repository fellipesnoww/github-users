import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';

export default function Users() {
  return (
    <Container>
      <Header />
      {/* <UserList data={[]} /> */}
      <UserCard />
    </Container>
  );
}
