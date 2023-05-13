import React from 'react';
import {Container, Message} from './styles';
import Lottie from 'lottie-react-native';
import EmptySearch from '../../assets/animations/empty-state.json';
interface EmptyList {
  message: string;
}

export default function EmptyList({message}: EmptyList) {
  return (
    <Container>
      <Lottie
        source={EmptySearch}
        autoPlay
        loop
        style={{width: 250, height: 200}}
      />
      <Message>{message}</Message>
    </Container>
  );
}
