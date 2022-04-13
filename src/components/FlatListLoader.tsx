import React from 'react';

import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GameListContentLoader} from './elements/GameListContentLoader';

export const FlatListLoader: React.FC = () => {
  const tailwind = useTailwind();

  const loaders = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={tailwind('mx-5')}>
      {loaders.map(i => (
        <View key={i} style={tailwind('mt-2 rounded-xl bg-dark px-2')}>
          <GameListContentLoader />
        </View>
      ))}
    </View>
  );
};
