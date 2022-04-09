import React, {useState} from 'react';
import {Search} from '../components/Search';
import {BackgroundImage} from '../containers/BackgroundImage';
import {GamesQuery} from '../generated/graphql';

interface GamesProps {}

export const Games: React.FC<GamesProps> = ({}) => {
  const [games, setGames] = useState<GamesQuery>();

  return (
    <BackgroundImage safeArea>
      <Search setGames={setGames} />
    </BackgroundImage>
  );
};
