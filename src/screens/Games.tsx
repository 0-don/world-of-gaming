import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
// import {BackgroundImage} from '../components/containers/BackgroundImage';
import {SafeArea} from '../components/containers/SafeArea';
import {GameListContentLoader} from '../components/elements/GameListContentLoader';
import {FlatListLoader} from '../components/FlatListLoader';
import {GameCard} from '../components/GameCard';
import {Search} from '../components/Search';
import {useGamesLazyQuery} from '../graphql/generated/schema';
import {RootStackParamList} from '../navigation/AppNav';
import useGamesStore from '../store/GamesStore';
import {gamesVariables} from '../utils/apolloVariables';

export type GamesNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Games'
>;

interface GamesProps {
  navigation: GamesNavigationProp;
}

export const Games: React.FC<GamesProps> = ({navigation}) => {
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

  useEffect(() => {
    if (games && games?.length > 0) {
      navigation.navigate('GameDetails', {id: games[0].id!, navigation});
    }
  }, [games, navigation]);

  return (
    <SafeArea style={tailwind('bg-dark-dark')}>
      <Search style={tailwind('mx-5')} />
      {loading && games?.length === 0 ? (
        <FlatListLoader />
      ) : (
        <FlatList
          contentContainerStyle={tailwind('mx-5')}
          style={tailwind('mt-2 pb-5')}
          data={games}
          renderItem={({item}) => (
            <GameCard game={item} navigation={navigation} />
          )}
          keyExtractor={item => item!.slug!}
          onEndReachedThreshold={0.5}
          onEndReached={fetchMore}
          ListFooterComponent={() =>
            loading && games ? <GameListContentLoader /> : null
          }
        />
      )}
    </SafeArea>
  );
};
