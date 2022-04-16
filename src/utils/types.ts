import {GameDetailsQuery, GamesQuery} from '../graphql/generated/schema';

export type ArrayElement<ArrayType extends unknown[] | undefined | null> =
  ArrayType extends (infer ElementType)[] ? ElementType : never;

export type GamesQueryType = ArrayElement<GamesQuery['games']>;

export type GameDetailsQueryType = GameDetailsQuery['game'];
