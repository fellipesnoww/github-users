import {FlatList, Platform} from 'react-native';
import styled from 'styled-components/native';
import {RepositoryDTO} from '../../dtos/RepositoryDTO';


export const Container = styled.View`
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.background};
  align-items: flex-start;
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? '10px' : '30px'};
`;

export const RepositoriesList = styled(FlatList<RepositoryDTO>).attrs({})`
  flex: 1;
  width: 100%;
  background-color: ${({theme}) => theme.colors.shade};
  padding-horizontal: 16px;
`;

export const SearchArea = styled.View`
  width: 100%;
  padding-horizontal: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.shade};
  padding-vertical: 8px;
`;

export const ModalContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
  background-color: transparent;

`;
