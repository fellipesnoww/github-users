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

export default function UserCard() {
  return (
    <Container>
      <UserBasicInfo>
        <TextContent>
          <Avatar
            source={{
              uri: 'https://avatars.githubusercontent.com/u/48105194?v=4',
            }}
            resizeMode="contain"
          />
          <UserIdentifier>
            <NameData>
              <Name>John Doe Santos</Name>
              <ArrowRight />
            </NameData>
            <Username>@johndoesantos</Username>
          </UserIdentifier>
        </TextContent>
        <DeleteButton>
          <Delete />
        </DeleteButton>
      </UserBasicInfo>
      <UserAbout>
        <About>
          <Business />
          <AboutDescription>GO.K Digital</AboutDescription>
        </About>
        <About>
          <Place />
          <AboutDescription>São Paulo, Brazil</AboutDescription>
        </About>
        <About>
          <Star />
          <AboutDescription>2</AboutDescription>
        </About>
      </UserAbout>
    </Container>
  );
}
