import {GamesQuery} from '../graphql/generated/graphql';

export type ArrayElement<ArrayType extends unknown[] | undefined | null> =
  ArrayType extends (infer ElementType)[] ? ElementType : never;

export type GamesQueryType = ArrayElement<GamesQuery['games']>;
