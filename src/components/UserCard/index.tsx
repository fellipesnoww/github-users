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

interface UserCardProps {
  user: UserDTO;
}

export default function UserCard({user}: UserCardProps) {
  return (
    <Container>
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
        <DeleteButton>
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
