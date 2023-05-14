import styled, {css} from 'styled-components/native';

interface ContainerProps {
  isFocused: boolean;
}

const containerIsFocusedCss = css`
  width: 85%;
  align-items: center;
  justify-content: flex-start;
`;

const textInputIsFocusedCss = css`
  margin-left: 8px;
`;

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;
  padding-horizontal: 16px;

  background-color: ${({theme}) => theme.colors.background};
  border-radius: 4px;
  flex-direction: row;
  overflow: hidden;
  elevation: 3;
  width: 48px;
  margin-right: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  height: 40px;
  ${({isFocused}) => isFocused && containerIsFocusedCss}
`;

export const TextInput = styled.TextInput<ContainerProps>`
  font-size: 16px;
  color: ${({theme}) => theme.colors.secondary};
  ${({isFocused}) => isFocused && textInputIsFocusedCss}
`;
