import React from 'react';
import {useTailwind} from 'tailwind-rn';
import {Search} from './components/Search';
import {BackgroundImage} from './containers/BackgroundImage';

export const Main = () => {
  const tailwind = useTailwind();

  return (
    <BackgroundImage safeArea>
      <Search />
    </BackgroundImage>
  );
};
