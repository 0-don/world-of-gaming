import React from 'react';
import {FlatList, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
// import {BackgroundImage} from '../components/containers/BackgroundImage';
import {SafeArea} from '../components/containers/SafeArea';
import {FlatListLoader} from '../components/FlatListLoader';
import {GameCard} from '../components/GameCard';
import {Search} from '../components/Search';
import useGamesStore from '../store/GamesStore';

interface GamesProps {}

export const Games: React.FC<GamesProps> = ({}) => {
  const tailwind = useTailwind();
  const {loading, games} = useGamesStore();

  return (
    <SafeArea style={tailwind('bg-dark-dark')}>
      {/* <BackgroundImage safeArea></BackgroundImage> */}
      <View>
        <Search style={tailwind('mx-6')} />
        {/* <FlatListLoader /> */}
        {loading ? (
          <FlatListLoader />
        ) : (
          <FlatList
            contentContainerStyle={tailwind('pb-12')}
            style={tailwind('mt-2 pb-5')}
            data={games}
            renderItem={({item}) => <GameCard game={item} />}
            keyExtractor={item => item!.slug!}
          />
        )}
      </View>
      {/* </BackgroundImage> */}
    </SafeArea>
  );
};
