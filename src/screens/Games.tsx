import React, {useState} from 'react';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {Search} from '../components/Search';

import {GamesQuery} from '../graphql/generated/graphql';

interface GamesProps {}

export const Games: React.FC<GamesProps> = ({}) => {
  const [games, setGames] = useState<GamesQuery>();
  games;
  return (
    <BackgroundImage safeArea>
      <Search setGames={setGames} />
    </BackgroundImage>
  );
};
