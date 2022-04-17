import {useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {useTailwind} from 'tailwind-rn/dist';
import {SafeArea} from '../components/containers/SafeArea';
import {GameListContentLoader} from '../components/loaders/GameListContentLoader';
import {FlatListLoader} from '../components/loaders/FlatListLoader';
import {GameCard} from '../components/GameCard';
import {Search} from '../components/Search';
import {useGamesLazyQuery} from '../graphql/generated/schema';
import {RootStackParamList} from '../navigation/AppNav';
import {gamesVariables} from '../utils/apolloVariables';
import noGamesFound from '../assets/images/no_games_found.svg';

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
  const [fetchGames, {data, loading, fetchMore, called}] = useGamesLazyQuery({
    notifyOnNetworkStatusChange: true,
  });

  const games = data?.games;

  const fetchMoreGames = async () => {
    if (!endReached && !loading && isFocused) {
      const {data: fetchData} = await fetchMore({
        variables: gamesVariables(search, data?.games?.length || 0),
      });
      setEndReached(fetchData?.games?.length ? false : true);
    }
  };

  // useEffect(() => {
  //   if (games && games?.length > 0) {
  //     navigation.navigate('GameDetails', {id: games[0].id!});
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
      ) : called && !games?.length ? (
        <View style={tailwind('flex-1 items-center justify-center')}>
          <Text style={tailwind('font-objektiv-mk1-bold text-3xl text-white')}>
            no games found
          </Text>
          <View style={tailwind('[aspectRatio:1]')}>
            <SvgXml width="100%" height="200" xml={noGamesFound} />
          </View>
        </View>
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
