import React from 'react';
import {FlatList, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
// import {BackgroundImage} from '../components/containers/BackgroundImage';
import {SafeArea} from '../components/containers/SafeArea';
import {GameListContentLoader} from '../components/elements/GameListContentLoader';
import {FlatListLoader} from '../components/FlatListLoader';
import {GameCard} from '../components/GameCard';
import {Search} from '../components/Search';
import {useGamesLazyQuery} from '../graphql/generated/schema';
import useGamesStore from '../store/GamesStore';
import {gamesVariables} from '../utils/apolloVariables';

interface GamesProps {}

export const Games: React.FC<GamesProps> = ({}) => {
  const tailwind = useTailwind();
  const {
    loading,
    games,
    search,
    setGames,
    setLoading,
    endReached,
    setEndReached,
  } = useGamesStore();
  const [fetchGames] = useGamesLazyQuery();

  const fetchMore = async () => {
    if (!endReached) {
      setLoading(true);
      const {data} = await fetchGames({
        variables: gamesVariables(games, search),
      });
      setEndReached(data?.games?.length ? false : true);
      setGames([...(games || []), ...(data?.games || [])]);
      setLoading(false);
    }
  };
  console.log(loading);
  return (
    <SafeArea style={tailwind('bg-dark-dark')}>
      {/* <BackgroundImage safeArea></BackgroundImage> */}
      <View style={tailwind('mx-5')}>
        <Search />
        {loading && games?.length === 0 ? (
          <FlatListLoader />
        ) : (
          <>
            <FlatList
              contentContainerStyle={tailwind('pb-12')}
              style={tailwind('mt-2 pb-5')}
              data={games}
              renderItem={({item}) => <GameCard game={item} />}
              keyExtractor={item => item!.slug!}
              onEndReachedThreshold={0.5}
              onEndReached={fetchMore}
              ListFooterComponent={() =>
                loading && games && games?.length > 0 ? (
                  <GameListContentLoader />
                ) : null
              }
            />
            <GameListContentLoader />
          </>
        )}
      </View>
      {/* </BackgroundImage> */}
    </SafeArea>
  );
};
