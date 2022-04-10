import React from 'react';
import {Image, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GamesQueryType} from '../utils/types';

interface GameCardProps {
  game: GamesQueryType;
}

export const GameCard: React.FC<GameCardProps> = ({game}) => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('bg-dark')}>
      <View style={tailwind('flex-row')}>
        <Image
          source={{
            uri: game.cover?.url ?? '',
          }}
          resizeMode="contain"
          style={tailwind('w-24 [height:undefined] [aspectRatio:1]')}
        />
        <Text style={tailwind('font-objektiv-mk1 text-white')}>
          {game?.name}
        </Text>
      </View>
    </View>
  );
};
