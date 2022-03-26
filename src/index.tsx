import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {AppNav} from './navigation/AppNav';
import useIgdbStore from './store/IgdbStore';

export const Main = () => {
  const {authenticate, access_token, getGames} = useIgdbStore();

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
