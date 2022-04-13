import React, {useEffect} from 'react';
import {View, ViewStyle} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {useGamesLazyQuery} from '../graphql/generated/schema';
import useGamesStore from '../store/GamesStore';
import {gamesVariables} from '../utils/apolloVariables';
import {Input} from './elements/Input';

interface SearchProps {
  style?: ViewStyle;
}

export const Search: React.FC<SearchProps> = ({style}) => {
  const tailwind = useTailwind();
  const {setGames, setLoading, search, setSearch, setEndReached} =
    useGamesStore();
  const [fetchGames] = useGamesLazyQuery();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      setGames([]);
      const {data} = await fetchGames({
        variables: gamesVariables(undefined, search),
      });
      setEndReached(false);
      setGames(data?.games);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [search, fetchGames, setGames, setLoading, setEndReached]);

  return (
    <View style={{...style, ...tailwind('')}}>
      <Input value={search} onChangeText={setSearch} />
    </View>
  );
};
