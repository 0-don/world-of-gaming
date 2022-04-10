import React from 'react';
import {FlatList, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {FlatListLoader} from '../components/FlatListLoader';
import {GameCard} from '../components/GameCard';
import {Search} from '../components/Search';
import useGamesStore from '../store/GamesStore';

interface GamesProps {}

export const Games: React.FC<GamesProps> = ({}) => {
  const tailwind = useTailwind();
  const {loading, games} = useGamesStore();

  console.log(loading, games?.length);

  return (
    <BackgroundImage safeArea>
      <View style={tailwind('mx-6')}>
        <Search />
        {loading ? (
          <FlatListLoader />
        ) : (
          <FlatList
            data={games}
            renderItem={({item}) => <GameCard game={item} />}
            keyExtractor={item => item!.slug!}
          />
        )}
      </View>
    </BackgroundImage>
  );
};
