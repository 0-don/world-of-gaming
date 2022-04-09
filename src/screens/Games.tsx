import React from 'react';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {Search} from '../components/Search';
import useGamesStore from '../store/GamesStore';

interface GamesProps {}

export const Games: React.FC<GamesProps> = ({}) => {
  const {loading, games} = useGamesStore();

  console.log(loading, games?.length);
  return (
    <BackgroundImage safeArea>
      <Search />
    </BackgroundImage>
  );
};
