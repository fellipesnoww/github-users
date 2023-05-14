import React from 'react';
import {Container, Text} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export default function CancelButton({text, ...props}: ButtonProps) {
  return (
    <Container {...props}>
      <Text>{text}</Text>
    </Container>
  );
}
