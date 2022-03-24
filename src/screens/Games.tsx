import React from 'react';
import {Search} from '../components/Search';
import {BackgroundImage} from '../containers/BackgroundImage';

interface GamesProps {}

export const Games: React.FC<GamesProps> = ({}) => {
  return (
    <BackgroundImage safeArea>
      <Search />
    </BackgroundImage>
  );
};
