import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppNav} from './navigation/AppNav';

export const Main = () => {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};
