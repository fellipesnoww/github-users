import React from 'react';
import ArrowBack from '../../assets/icons/arrow_back.svg';
import {BackButton, Container, UserAvatar} from './styles';
import {useNavigation} from '@react-navigation/native';

interface HeaderWithUserProps {
  avatar_url: string;
}

export default function HeaderWithUser({avatar_url}: HeaderWithUserProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <ArrowBack />
      </BackButton>
      <UserAvatar source={{uri: avatar_url}} />
    </Container>
  );
}
