import {
  GameCategory,
  GameDetailsQueryVariables,
  GamesQueryVariables,
  ImageTypeEnum,
  SortOrder,
} from '../graphql/generated/schema';

export const gamesVariables = (
  search: string,
  gameCount: number,
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
  offset: gameCount || undefined,
  limit: 10,
  imageType: ImageTypeEnum.Hd,
  platformLogo: ImageTypeEnum.CoverSmall,
});

export const gameDetailsVariables = (
  id: number,
): GameDetailsQueryVariables => ({
  where: {id: {equals: id}},
  imageType: ImageTypeEnum.Hd,
});
