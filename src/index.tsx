import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {AppNav} from './navigation/AppNav';

export const Main = () => {
  // useEffect(() => {
  //   if (!access_token) {
  //     authenticate();
  //   }
  // }, []);

  // useEffect(() => {
  //   if (access_token) {
  //     getGames();
  //   }
  // }, []);

  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};
