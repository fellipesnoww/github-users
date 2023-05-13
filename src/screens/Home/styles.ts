import {FlatList, Platform} from 'react-native';
import styled from 'styled-components/native';
import {UserDTO} from '../../dtos/UserDTO';

export const Container = styled.View`
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.background};
  align-items: flex-start;
  width: 100%;
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? '10px' : '40px'};
`;

export const UserList = styled(FlatList<UserDTO>).attrs({})``;
