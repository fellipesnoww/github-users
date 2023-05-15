import styled from 'styled-components/native';

interface ContainerProps {
  lightBackground: boolean;
}

export const Container = styled.View<ContainerProps>`
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;
  background-color: ${({theme, lightBackground}) => lightBackground ? theme.colors.shade : theme.colors.background};
  border-radius: 4px;
  flex-direction: row;
  overflow: hidden;
  elevation: 3;
  margin-right: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const TextInput = styled.TextInput`
  font-size: 16px;
  color: ${({theme}) => theme.colors.secondary};
  margin-left: 8px;
  width: 100%;
`;
