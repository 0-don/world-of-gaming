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
    <View style={tailwind('mx-5 mt-2')}>
      <View style={tailwind('flex-row bg-dark')}>
        <Image
          source={{
            uri: game.cover?.url ?? '',
          }}
          resizeMode="contain"
          style={tailwind('w-24 [height:undefined] [aspectRatio:1]')}
        />
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={tailwind('flex-1 font-objektiv-mk1-bold text-white')}>
          {game?.name}
        </Text>
      </View>
    </View>
  );
};
