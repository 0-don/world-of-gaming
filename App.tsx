import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {Main} from './src';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle="dark-content"
        translucent={true}
      />
      <Main />
    </TailwindProvider>
  );
};

export default App;
