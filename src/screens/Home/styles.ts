import {FlatList, Platform} from 'react-native';
import styled from 'styled-components/native';
import {UserDTO} from '../../dtos/UserDTO';

export const Container = styled.View`
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.background};
  align-items: flex-start;
  width: 100%;
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? '30px' : '40px'};
`;

export const UserList = styled(FlatList<UserDTO>).attrs({})`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.colors.shade};
  padding-horizontal: 16px;
`;
