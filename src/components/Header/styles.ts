import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.background};

  padding: 16px;
  width: 100%;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 98px;
  height: 40px;
`;
