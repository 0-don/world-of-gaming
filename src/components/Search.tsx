import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GamesQuery, useGamesLazyQuery} from '../generated/graphql';
import {Input} from './elements/Input';

interface SearchProps {
  setGames: Dispatch<SetStateAction<GamesQuery | undefined>>;
}

export const Search: React.FC<SearchProps> = ({setGames}) => {
  const tailwind = useTailwind();
  const [games] = useGamesLazyQuery();
  const [search, setSearch] = React.useState('');

  useEffect(() => {
    const fetchGames = async () => {
      const {data} = await games({
        variables: {where: {name: {contains: search}}},
      });
      setGames(data);
    };
    fetchGames();
  }, [search, games, setGames]);

  return (
    <View style={tailwind('mx-6')}>
      <Input value={search} onChangeText={setSearch} />
    </View>
  );
};
