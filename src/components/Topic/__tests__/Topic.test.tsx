import React from 'react';
import {render} from '@testing-library/react-native';

import {ThemeProvider} from 'styled-components/native';
import {APP_THEME} from '../../../global/styles/theme';
import { Topic, TypeAction } from '..';

describe('Topic render', () => {
  it('should render Topic component with add action', () => {
    const element = render(
      <ThemeProvider theme={APP_THEME}>
        <Topic name='react' typeAction={TypeAction.add} />
      </ThemeProvider>
    );
    expect(element).toBeTruthy();
  });

  it('should render Topic component with remove action', () => {
    const element = render(
      <ThemeProvider theme={APP_THEME}>
        <Topic name='react-native' typeAction={TypeAction.remove} />
      </ThemeProvider>
    );
    expect(element).toBeTruthy();

  });

  it('should render Topic component without action', () => {
    const element = render(
      <ThemeProvider theme={APP_THEME}>
        <Topic name='angular' typeAction={TypeAction.none} />
      </ThemeProvider>
    );
    expect(element).toBeTruthy();
  });
});
