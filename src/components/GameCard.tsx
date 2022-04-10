import React from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GamesQueryType} from '../utils/types';

interface GameCardProps {
  game: GamesQueryType;
}

export const GameCard: React.FC<GameCardProps> = ({game}) => {
  const tailwind = useTailwind();
  console.log(game.screenshots);
  return (
    <View style={tailwind('bg-dark')}>
      <Text style={tailwind('text-white')}>{game?.name}</Text>
    </View>
  );
};
