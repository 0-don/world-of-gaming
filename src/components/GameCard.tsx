import React from 'react';
import {ListRenderItem, Text, View} from 'react-native';
import {GamesQueryType} from '../utils/types';

export const GameCard: ListRenderItem<GamesQueryType> = ({
  item,
}): JSX.Element => {
  return (
    <View>
      <Text>{item?.name ?? ''}</Text>
    </View>
  );
};
