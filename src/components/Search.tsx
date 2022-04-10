import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {useGamesLazyQuery} from '../graphql/generated/schema';
import useGamesStore from '../store/GamesStore';
import {Input} from './elements/Input';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  const tailwind = useTailwind();
  const {setGames, setLoading, search, setSearch} = useGamesStore();
  const [games] = useGamesLazyQuery();

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const {data} = await games({
        variables: {where: {name: {contains: search}}},
      });

      setGames(data?.games);
      setLoading(false);
    };
    fetchGames();
  }, [search, games, setGames, setLoading]);

  // useEffect(() => {
  //   console.log(loading);
  // }, [setLoading, loading]);

  return (
    <View style={tailwind('')}>
      <Input value={search} onChangeText={setSearch} />
    </View>
  );
};
