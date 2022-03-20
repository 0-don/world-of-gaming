import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {Main} from './src';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <Main />
    </TailwindProvider>
  );
};

export default App;
