import React from 'react';
import ArrowBack from '../../assets/icons/arrow_back.svg';
import {BackButton, Container, UserAvatar} from './styles';

export default function HeaderWithUser() {
  return (
    <Container>
      <BackButton>
        <ArrowBack />
      </BackButton>
      <UserAvatar
        source={{uri: 'https://avatars.githubusercontent.com/u/48105194?v=4'}}
      />
    </Container>
  );
}
