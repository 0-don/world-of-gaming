import {
  GameCategory,
  SortOrder,
  ImageTypeEnum,
} from '../graphql/generated/schema';
import {GamesQueryType} from './types';

export const gamesVariables = (
  games: GamesQueryType[] | undefined | null,
  search: string,
) => ({
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
  offset: games?.length || undefined,
  limit: 10,
  imageType: ImageTypeEnum.Hd,
  platformLogo: ImageTypeEnum.CoverSmall,
});
