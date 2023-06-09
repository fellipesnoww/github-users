import React from 'react';
import {Container, TextInput} from './styles';
import UserIcon from '../../assets/icons/account_circle.svg';
import {useTheme} from 'styled-components';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  icon?: string;
}

export default function Input({...props}: InputProps) {
  const theme = useTheme();
  return (
    <Container>
      <UserIcon width={24} height={24} />
      <TextInput placeholderTextColor={theme.colors.secondary} {...props} />
    </Container>
  );
}
