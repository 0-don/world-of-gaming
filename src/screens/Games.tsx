import React from 'react';
import {FlatList} from 'react-native';
import ContentLoader, {Circle, Rect} from 'react-content-loader/native';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {GameCard} from '../components/GameCard';
import {Search} from '../components/Search';
import useGamesStore from '../store/GamesStore';

interface GamesProps {}

export const Games: React.FC<GamesProps> = ({}) => {
  const {loading, games} = useGamesStore();

  return (
    <BackgroundImage safeArea>
      <Search />
      {!loading ? (
        <ContentLoader
          viewBox="0 0 380 70"
          speed={0.5}
          backgroundColor={'#333'}
          foregroundColor={'#999'}>
          <Circle cx="30" cy="30" r="30" />
          <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>
      ) : (
        <FlatList
          data={games}
          renderItem={GameCard}
          keyExtractor={item => item!.slug!}
        />
      )}
    </BackgroundImage>
  );
};
