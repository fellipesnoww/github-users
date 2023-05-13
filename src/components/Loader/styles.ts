import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Message = styled.Text`
  font-size: 20px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary.regular};
  text-align: center;
  margin-top: 40px;
`;
