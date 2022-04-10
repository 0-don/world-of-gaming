import React, {useEffect} from 'react';
import {View, ViewStyle} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {ImageTypeEnum, useGamesLazyQuery} from '../graphql/generated/schema';
import useGamesStore from '../store/GamesStore';
import {Input} from './elements/Input';

interface SearchProps {
  style?: ViewStyle;
}

export const Search: React.FC<SearchProps> = ({style}) => {
  const tailwind = useTailwind();
  const {setGames, setLoading, search, setSearch} = useGamesStore();
  const [games] = useGamesLazyQuery();

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const {data} = await games({
        variables: {
          where: {name: {contains: search}},
          imageType: ImageTypeEnum.CoverBig,
        },
      });

      setGames(data?.games);
      setLoading(false);
    };
    fetchGames();
  }, [search, games, setGames, setLoading]);

  return (
    <View style={{...style, ...tailwind('')}}>
      <Input value={search} onChangeText={setSearch} />
    </View>
  );
};
