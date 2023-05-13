import styled from 'styled-components/native';

interface TextProps {
  isSmallText: boolean;
}

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.shade};
  padding: 3px 16px;
  border-radius: 100px;
  flex-direction: row;
  margin-right: 8px;
  margin-bottom: 4px;
`;

export const Name = styled.Text<TextProps>`
  line-height: 20px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary.regular};
  font-size: ${({isSmallText}) => (isSmallText ? '12px ' : '16spx')};
`;
