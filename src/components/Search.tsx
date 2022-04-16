import {useApolloClient} from '@apollo/client';
import {useIsFocused} from '@react-navigation/native';
import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {View, ViewStyle} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GamesLazyQueryHookResult} from '../graphql/generated/schema';
import {gamesVariables} from '../utils/apolloVariables';
import {Input} from './elements/Input';

interface SearchProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setEndReached: Dispatch<SetStateAction<boolean>>;
  style?: ViewStyle;
  fetchGames: GamesLazyQueryHookResult[0];
}

export const Search: React.FC<SearchProps> = ({
  style,
  search,
  setSearch,
  setEndReached,
  fetchGames,
}) => {
  const isFocused = useIsFocused();
  const {cache} = useApolloClient();
  const tailwind = useTailwind();

  useEffect(() => {
    if (isFocused) {
      console.log('search');
      const delayDebounceFn = setTimeout(async () => {
        cache.evict({id: 'ROOT_QUERY', fieldName: 'games'});

        setEndReached(false);
        await fetchGames({
          variables: gamesVariables(search, 0),
        });
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [search, fetchGames, setEndReached, cache, isFocused]);

  return (
    <View style={{...style, ...tailwind('')}}>
      <Input value={search} onChangeText={setSearch} />
    </View>
  );
};
