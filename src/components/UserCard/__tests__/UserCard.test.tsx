import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {user} from '../../../../__mock__/userData';
import UserCard from '..';
import {AllProvidersMock} from '../../../../__mock__/allProviders';

describe('UserCard render', () => {
  it('should render UserCard successfully', () => {
    const {debug} = render(
      <AllProvidersMock>
        <UserCard user={user} />
      </AllProvidersMock>,
    );
    debug();
  });

  it('should find element with user login', () => {
    const {getByText} = render(
      <AllProvidersMock>
        <UserCard user={user} />
      </AllProvidersMock>,
    );

    expect(getByText(user.login)).toBeTruthy();
  });

  it('should press remove user', () => {
    const {getByTestId} = render(
      <AllProvidersMock>
        <UserCard user={user} />
      </AllProvidersMock>,
    );

    const removeUserButton = getByTestId("remove-user-button");

    fireEvent.press(removeUserButton);
  });
});
