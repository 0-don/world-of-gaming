import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppNav} from './navigation/AppNav';
import {client} from './utils/client';

export const Main = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AppNav />
      </NavigationContainer>
    </ApolloProvider>
  );
};
