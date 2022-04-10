import React from 'react';
import {ListRenderItem, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GamesQueryType} from '../utils/types';

export const GameCard: ListRenderItem<GamesQueryType> = ({
  item,
}): JSX.Element => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('bg-dark')}>
      <Text>{item?.name ?? ''}</Text>
    </View>
  );
};
