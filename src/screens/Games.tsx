import React from 'react';
import {FlatList, View} from 'react-native';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {GameCard} from '../components/GameCard';
import {Search} from '../components/Search';
import useGamesStore from '../store/GamesStore';
import {FlatListLoader} from '../components/FlatListLoader';
import {useTailwind} from 'tailwind-rn/dist';

interface GamesProps {}

export const Games: React.FC<GamesProps> = ({}) => {
  const tailwind = useTailwind();
  const {loading, games} = useGamesStore();

  return (
    <BackgroundImage safeArea>
      <View style={tailwind('mx-6')}>
        <Search />
        {loading ? (
          <FlatListLoader />
        ) : (
          <FlatList
            data={games}
            renderItem={GameCard}
            keyExtractor={item => item!.slug!}
          />
        )}
      </View>
    </BackgroundImage>
  );
};
