import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '../../navigation/AppNavigator';

describe('AppNavigator', () => {
  it('renders home screen initially', () => {
    const { getByText } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    expect(getByText('Total Balance: $2000')).toBeTruthy();
  });

  it('navigates to user profile screen', () => {
    const { getByText, queryByText } = render(
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );

    fireEvent.press(getByText('Profile'));
    expect(queryByText('User Profile')).toBeTruthy();
  });
});
