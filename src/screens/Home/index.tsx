import React from 'react';
import {Container} from './styles';
import Header from '../../components/Header';
import UserCard from '../../components/UserCard';
import HeaderWithUser from '../../components/HeaderWithUser';

export default function Home() {
  return (
    <Container>
      <Header />
      <HeaderWithUser />
      {/* <UserList data={[]} /> */}
      <UserCard />
    </Container>
  );
}
