import {render} from '@testing-library/react-native';
import React from 'react';
import Register from '..';
import {ThemeProvider} from 'styled-components/native';
import { APP_THEME } from '../../../global/styles/theme';
import Routes from '../../../routes';

describe('Register Screen', () => {
  it('should render Register Screen', () => {
    const {debug} = render(
      <ThemeProvider theme={APP_THEME}>
        <Routes />
        <Register />
      </ThemeProvider>,
    );
    debug();
  });
});
