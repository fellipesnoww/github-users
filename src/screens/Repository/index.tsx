import React from 'react';
import {Container, RepositoriesList} from './styles';
import HeaderWithUser from '../../components/HeaderWithUser';
import RepoCard from '../../components/RepoCard';

export default function Repository() {
  return (
    <Container>
      <HeaderWithUser />
      {/* <RepositoriesList /> */}
      <RepoCard />
    </Container>
  );
}
