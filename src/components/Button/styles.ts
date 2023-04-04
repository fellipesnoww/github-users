import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({theme, disabled}) =>
    disabled ? theme.colors.shade : theme.colors.primary};
  padding-vertical: 10px;
  border-radius: 100px;
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.fonts.primary.regular};
`;
