import React, {useEffect} from 'react';
import {View, ViewStyle} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {
  GameCategory,
  ImageTypeEnum,
  SortOrder,
  useGamesLazyQuery,
} from '../graphql/generated/schema';
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
    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      const {data} = await games({
        variables: {
          where: {
            AND: [
              {
                name: {contains: search},
                category: GameCategory.MainGame,
                follows: {gte: 2},
              },
            ],
          },
          sort: {follows: SortOrder.Desc},
          limit: 10,
          imageType: ImageTypeEnum.CoverBig,
          platformLogo: ImageTypeEnum.CoverSmall,
        },
      });

      setGames(data?.games);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [search, games, setGames, setLoading]);

  return (
    <View style={{...style, ...tailwind('')}}>
      <Input value={search} onChangeText={setSearch} />
    </View>
  );
};
