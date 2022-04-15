import {
  GameCategory,
  SortOrder,
  ImageTypeEnum,
  GamesQueryVariables,
  GameDetailsQueryVariables,
} from '../graphql/generated/schema';
import {GamesQueryType} from './types';

export const gamesVariables = (
  games: GamesQueryType[] | undefined | null,
  search: string,
): GamesQueryVariables => ({
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

export const gameDetailsVariables = (
  id: number,
): GameDetailsQueryVariables => ({
  where: {id: {equals: id}},
  imageType: ImageTypeEnum.Hd,
  platformLogo: ImageTypeEnum.CoverSmall,
});
