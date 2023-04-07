import React from 'react';
import Button from '../Button';
import GitLogo from '../../assets/github_logo.png';
import {Container, Logo} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={GitLogo} />
      <Button text="Adicionar novo" style={{width: 155}} />
    </Container>
  );
}
