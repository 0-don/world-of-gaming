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
import {useIsFocused} from '@react-navigation/native';

export type GamesNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Games'
>;

interface GamesProps {
  navigation: GamesNavigationProp;
}

export const Games: React.FC<GamesProps> = ({navigation}) => {
  const tailwind = useTailwind();
  const isFocused = useIsFocused();
  const [search, setSearch] = useState('');
  const [endReached, setEndReached] = useState(false);
  const [fetchGames, {data, loading, fetchMore}] = useGamesLazyQuery({
    // notifyOnNetworkStatusChange: true,
  });

  const games = data?.games;
  console.log(games?.length, loading);
  const fetchMoreGames = async () => {
    if (!endReached && !loading && isFocused) {
      console.log('fetch more');
      const {data: fetchData} = await fetchMore({
        variables: gamesVariables(search, data?.games?.length),
      });
      setEndReached(fetchData?.games?.length ? false : true);
    }
  };
  // console.log(loading, games?.length);
  // useEffect(() => {
  //   if (games && games?.length > 0) {
  //     navigation.navigate('GameDetails', {id: games[0].id!, navigation});
  //   }
  // }, [games, navigation]);

  return (
    <SafeArea style={tailwind('flex-1 bg-dark-dark')}>
      <Search
        search={search}
        setSearch={setSearch}
        fetchGames={fetchGames}
        setEndReached={setEndReached}
        style={tailwind('mx-5')}
      />
      {loading && !games ? (
        <FlatListLoader />
      ) : (
        <FlatList
          contentContainerStyle={tailwind('mx-5')}
          style={tailwind('mt-2 pb-5')}
          data={games}
          // initialNumToRender={7}
          renderItem={({item}) => (
            <GameCard game={item} navigation={navigation} />
          )}
          keyExtractor={item => item!.slug!}
          onEndReachedThreshold={0.5}
          // onMomentumScrollEnd={fetchMoreGames}
          onEndReached={({distanceFromEnd}) =>
            distanceFromEnd > 0 && fetchMoreGames()
          }
          ListFooterComponent={() =>
            loading && games ? <GameListContentLoader /> : null
          }
        />
      )}
    </SafeArea>
  );
};
