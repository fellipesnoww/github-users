import styled from 'styled-components/native';

interface DetailProps {
  removeMargin?: boolean;
}

export const Container = styled.View`
  width: 100%;
  padding: 26px 28px 25px 20px;
  background-color: ${({theme}) => theme.colors.background};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  elevation: 3;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const InlineContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const RepoName = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary.bold};
  margin-right: 8px;
`;

export const StarButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background: rgba(255, 199, 0, 0.16);
`;

export const AboutRepo = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary.regular};
  margin-bottom: 6px;
`;

export const RepoDetails = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Detail = styled.View<DetailProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  ${({removeMargin}) => removeMargin && 'margin-left: 0px'}
`;

export const DetailName = styled.Text`
  font-size: 12px;
  line-height: 15px;
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.primary.regular};
  margin-left: 4px;
`;

export const TopicList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-vertical: 8px;
  flex-wrap: wrap;
`;
