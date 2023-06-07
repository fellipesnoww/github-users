import {render} from '@testing-library/react-native';
import React from 'react';
import Register from '..';
import { AllProvidersMock } from '../../../../__mock__/allProviders';


describe('Register Screen', () => {
  it('should render Register Screen', () => {
    const {debug} = render(
      <AllProvidersMock>
        <Register />
      </AllProvidersMock>
    );
    debug();
  });
});
