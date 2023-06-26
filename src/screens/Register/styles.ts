import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.background};
  padding: 60px 40px 32px 40px;
  align-items: flex-start;
  width: 100%;
  flex: 1;
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export const Logo = styled.Image`
  width: 198px;
  height: 80px;
`;

export const Title = styled.Text`
  font-size: 22px;
  line-height: 28px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary.bold};
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.primary.regular};
  margin-bottom: 32px;
`;

export const UnderlinedDescription = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.primary.regular};
  text-decoration: underline;
  margin-bottom: 32px;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.background};
`;

export const BackButton = styled.TouchableWithoutFeedback`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
