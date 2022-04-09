import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {useGamesLazyQuery} from '../graphql/generated/graphql';
import useGamesStore from '../store/GamesStore';
import {Input} from './elements/Input';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  const tailwind = useTailwind();
  const {setGames, setLoading, search, setSearch} = useGamesStore();
  const [games, {loading}] = useGamesLazyQuery();

  useEffect(() => {
    setLoading(loading);
    const fetchGames = async () => {
      const {data} = await games({
        variables: {where: {name: {contains: search}}},
      });

      setGames(data?.games);
    };
    fetchGames();
  }, [search, games, setGames, loading, setLoading]);

  return (
    <View style={tailwind('mx-6')}>
      <Input value={search} onChangeText={setSearch} />
    </View>
  );
};
