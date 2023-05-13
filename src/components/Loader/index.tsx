import React from 'react';
import {Container, Message} from './styles';
import Lottie from 'lottie-react-native';
import GithubLoader from '../../assets/animations/github-loader.json';

interface LoaderProps {
  message: string;
}

export default function Loader({message}: LoaderProps) {
  return (
    <Container>
      <Lottie
        source={GithubLoader}
        autoPlay
        loop
        style={{width: 250, height: 200}}
      />
      <Message>{message}</Message>
    </Container>
  );
}
