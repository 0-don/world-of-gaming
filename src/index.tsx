import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {AppNav} from './navigation/AppNav';
import useIgdbStore from './store/IgdbStore';

export const Main = () => {
  const {authenticate, access_token, error} = useIgdbStore();

  useEffect(() => {
    if (!access_token) {
      authenticate();
    }
  }, []);

  console.log(access_token);

  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};
