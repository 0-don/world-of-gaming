import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {View, ViewStyle} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GamesLazyQueryHookResult} from '../graphql/generated/schema';
import {gamesVariables} from '../utils/apolloVariables';
import {Input} from './elements/Input';

interface SearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  style?: ViewStyle;
  fetchGames: GamesLazyQueryHookResult[0];
}

export const Search: React.FC<SearchProps> = ({
  style,
  search,
  setSearch,
  fetchGames,
}) => {
  const tailwind = useTailwind();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      fetchGames({variables: gamesVariables(search, undefined)});
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [search, fetchGames]);

  return (
    <View style={{...style, ...tailwind('')}}>
      <Input value={search} onChangeText={setSearch} />
    </View>
  );
};
