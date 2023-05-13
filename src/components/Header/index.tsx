import React from 'react';
import Button from '../Button';
import GitLogo from '../../assets/github_logo.png';
import {Container, Logo} from './styles';

interface HeaderProps {
  buttonAction: () => void;
  textButton: string;
}

export default function Header({buttonAction, textButton}: HeaderProps) {
  return (
    <Container>
      <Logo source={GitLogo} />
      <Button text={textButton} style={{width: 155}} onPress={buttonAction} />
    </Container>
  );
}
