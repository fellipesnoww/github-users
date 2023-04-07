import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background};
  padding: 16px 20px 24px 16px;
  width: 100%;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;
