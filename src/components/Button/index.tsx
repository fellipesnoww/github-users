import React from 'react';
import {Container, Text} from './styles';

interface ButtonProps {
  text: string;
}

export default function Home({text, ...props}: ButtonProps) {
  return (
    <Container {...props}>
      <Text>{text}</Text>
    </Container>
  );
}
