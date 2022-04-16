import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {SafeArea} from '../components/containers/SafeArea';
import {GameListContentLoader} from '../components/elements/GameListContentLoader';
import {FlatListLoader} from '../components/FlatListLoader';
import {GameCard} from '../components/GameCard';
import {Search} from '../components/Search';
import {useGamesLazyQuery} from '../graphql/generated/schema';
import {RootStackParamList} from '../navigation/AppNav';
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
  const [search, setSearch] = useState('');
  const [endReached, setEndReached] = useState(false);
  const [fetchGames, {data, loading, fetchMore}] = useGamesLazyQuery();

  const games = data?.games;

  const fetchMoreGames = async () => {
    if (!endReached) {
      await fetchMore({
        variables: gamesVariables(search, data?.games?.length),
      });
      console.log(1);
      setEndReached(data?.games?.length ? false : true);
    }
  };
  console.log(loading);
  // useEffect(() => {
  //   if (games && games?.length > 0) {
  //     navigation.navigate('GameDetails', {id: games[0].id!, navigation});
  //   }
  // }, [games, navigation]);

  return (
    <SafeArea style={tailwind('bg-dark-dark')}>
      <Search
        search={search}
        setSearch={setSearch}
        fetchGames={fetchGames}
        style={tailwind('mx-5')}
      />
      {loading ? (
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
          onEndReached={fetchMoreGames}
          ListFooterComponent={() =>
            loading && games ? <GameListContentLoader /> : null
          }
        />
      )}
    </SafeArea>
  );
};
