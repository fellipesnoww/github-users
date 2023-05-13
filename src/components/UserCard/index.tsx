import React from 'react';
import ArrowRight from '../../assets/icons/keyboard_arrow_right.svg';
import Delete from '../../assets/icons/delete.svg';
import Business from '../../assets/icons/business.svg';
import Place from '../../assets/icons/place.svg';
import Star from '../../assets/icons/star.svg';

import {
  About,
  AboutDescription,
  Avatar,
  Container,
  DeleteButton,
  Name,
  NameData,
  TextContent,
  UserAbout,
  UserBasicInfo,
  UserIdentifier,
  Username,
} from './styles';
import {UserDTO} from '../../dtos/UserDTO';
import {useUsers} from '../../hooks/useUsers';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface UserCardProps {
  user: UserDTO;
}

export default function UserCard({user}: UserCardProps) {
  const {removeUser} = useUsers();
  const navigation = useNavigation();

  function handleRemoveUser() {
    Alert.alert(
      'Atenção',
      `Deseja remover ${user.login} da lista de usuários?`,
      [
        {
          style: 'cancel',
          text: 'Não',
          onPress: () => {},
        },
        {
          style: 'destructive',
          text: 'Sim',
          onPress: () => {
            removeUser(user.id);
          },
        },
      ],
    );
  }

  function navigateToRepositories() {
    navigation.navigate('Repository', {login: user.login});
  }

  return (
    <Container onPress={navigateToRepositories}>
      <UserBasicInfo>
        <TextContent>
          <Avatar
            source={{
              uri: user.avatar_url,
            }}
            resizeMode="contain"
          />
          <UserIdentifier>
            <NameData>
              <Name>{user.name}</Name>
              <ArrowRight />
            </NameData>
            <Username>{user.login}</Username>
          </UserIdentifier>
        </TextContent>
        <DeleteButton onPress={handleRemoveUser}>
          <Delete />
        </DeleteButton>
      </UserBasicInfo>
      <UserAbout>
        <About>
          <Business />
          <AboutDescription>{user.company}</AboutDescription>
        </About>
        <About>
          <Place />
          <AboutDescription>{user.location}</AboutDescription>
        </About>
        <About>
          <Star />
          <AboutDescription>{user.followers}</AboutDescription>
        </About>
      </UserAbout>
    </Container>
  );
}
