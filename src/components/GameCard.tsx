import React from 'react';
import {Image, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GamesQueryType} from '../utils/types';

interface GameCardProps {
  game: GamesQueryType;
}

export const GameCard: React.FC<GameCardProps> = ({game}) => {
  const tailwind = useTailwind();
  const cover = game.cover?.url;
  console.log(cover);
  return (
    <View style={tailwind('bg-dark')}>
      <View style={tailwind('flex-row')}>
        <Image
          source={{
            uri: cover ?? 'https://reactnative.dev/img/tiny_logo.png',
          }}
          resizeMode="contain"
          // resizeMethod="scale"
          style={tailwind('h-20 w-20')}
        />
        <Text style={tailwind('text-white')}>{game?.name}</Text>
      </View>
    </View>
  );
};
