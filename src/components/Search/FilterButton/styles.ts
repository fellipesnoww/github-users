import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 4px;
  flex-direction: row;
  overflow: hidden;
  elevation: 3;
  width: 48px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  height: 40px;
`;
