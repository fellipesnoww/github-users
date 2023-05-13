import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 32px 16px 32px 24px;
  background-color: ${({theme}) => theme.colors.background};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  elevation: 3;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const UserBasicInfo = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const UserIdentifier = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 16px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
`;

export const NameData = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary.bold};
  margin-right: 8px;
`;

export const Username = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary.regular};
`;

export const UserAbout = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
  margin-top: 16px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AboutDescription = styled.Text`
  font-size: 12px;
  line-height: 15px;
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.primary.regular};
  margin-left: 4px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;
