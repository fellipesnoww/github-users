import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-start;
  padding: 8px 16px;
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.shade};
  border-radius: 4px;
  flex-direction: row;
  margin-bottom: 24px;
  overflow: hidden;
`;

export const TextInput = styled.TextInput`
  margin-left: 8px;
  font-size: 16px;
  color: ${({theme}) => theme.colors.secondary};
  padding-right: 16px;
`;
