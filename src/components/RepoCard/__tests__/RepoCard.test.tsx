import React from 'react';
import {render} from '@testing-library/react-native';
import RepoCard from '..';

import {repository} from '../../../../__mock__/userData';
import {ThemeProvider} from 'styled-components/native';
import {APP_THEME} from '../../../global/styles/theme';

describe('RepoCard', () => {
  it('should render RepoCard', () => {
    const {debug} = render(
      <ThemeProvider theme={APP_THEME}>
        <RepoCard repository={repository} />
      </ThemeProvider>,
    );
    debug();
  });
});
