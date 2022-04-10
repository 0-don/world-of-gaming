import React from 'react';
import {Image, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GamesQueryType} from '../utils/types';

interface GameCardProps {
  game: GamesQueryType;
}

export const GameCard: React.FC<GameCardProps> = ({game}) => {
  const tailwind = useTailwind();

  const artwork = game?.artworks?.find(art => art);
  const screenshot = game?.screenshots?.find(scr => scr);
  console.log(game.follows, game.hypes);
  return (
    <View style={tailwind('mx-5 mt-2')}>
      <View style={tailwind('flex-row bg-dark')}>
        <Image
          source={{
            uri: game.cover?.url || artwork?.url || screenshot?.url || '',
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
