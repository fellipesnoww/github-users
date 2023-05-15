import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 32px 20px 25px 20px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary.bold};
  font-size: 22px;
  margin-bottom: 18px;
`;

export const SelectedTopicSection = styled.View`
  width: 100%;
  margin-vertical: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Sugestions = styled.View`
  width: 100%;
  margin-vertical: 8px;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 4px;
  border: 1px solid ${({theme}) => theme.colors.shade};
  padding: 16px 10px;
`;

export const SugestionLabel = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.primary.regular};
  font-size: 16px;
`;

export const SugestionsSection = styled.View`
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-top: 8px;
`;
