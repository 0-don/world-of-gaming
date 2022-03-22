import React from 'react';
import {StatusBar} from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import {Main} from './src';
import utilities from './tailwind.json';

const App = () => {
  return (
    <TailwindProvider utilities={utilities} colorScheme="dark">
      <StatusBar
        backgroundColor={'rgba(0,0,0,0)'}
        barStyle="light-content"
        translucent
      />
      <Main />
    </TailwindProvider>
  );
};

export default App;
