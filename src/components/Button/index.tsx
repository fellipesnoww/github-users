import React from 'react';
import {Container, Text} from './styles';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}

export default function Button({
  text,
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container disabled={disabled || loading} {...props}>
      {loading ? (
        <ActivityIndicator color={theme.colors.background} />
      ) : (
        <Text>{text}</Text>
      )}
    </Container>
  );
}
