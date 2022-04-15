import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {BackgroundImage} from '../components/containers/BackgroundImage';
import {RootStackParamList} from '../navigation/AppNav';

export type GameDetailsRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;

interface GameDetailsProps {
  route: GameDetailsRouteProp;
}

export const GameDetails: React.FC<GameDetailsProps> = ({
  route: {
    params: {game},
  },
}) => {
  const tailwind = useTailwind();

  return (
    <BackgroundImage safeArea>
      <Text style={tailwind('text-white')}>{game.name}</Text>
    </BackgroundImage>
  );
};
