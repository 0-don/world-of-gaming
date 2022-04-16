import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import React from 'react';
import {View, Image, Text} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useTailwind} from 'tailwind-rn/dist';
import {GameDetailsQueryType} from '../utils/types';
import {colorHexString} from '../utils/utils';
import placeholder from '../assets/images/placeholder_game.png';

dayjs.extend(localizedFormat);
interface GameDetailsHeaderProps {
  gameDetails: GameDetailsQueryType;
}

export const GameDetailsHeader: React.FC<GameDetailsHeaderProps> = ({
  gameDetails,
}) => {
  const tailwind = useTailwind();

  if (!gameDetails) {
    return null;
  }

  const {
    cover,
    first_release_date,
    name,
    genres,
    game_modes,
    aggregated_rating,
  } = gameDetails;
  const genresList = genres?.map(genre => genre.name);
  const gameModeList = game_modes?.map(gameMode => gameMode.name);
  return (
    <>
      <View style={tailwind('relative')}>
        <Image
          source={cover?.url ? {uri: cover.url} : placeholder}
          resizeMode="contain"
          style={tailwind(
            `mx-2 h-36 rounded-md ${
              cover?.url ? '[aspectRatio:0.75]' : 'w-24' //i hate react native image support
            }`,
          )}
        />
        {aggregated_rating && (
          <View
            style={tailwind(
              'absolute bottom-0 right-0 -mr-4 rounded-full bg-dark-lightAlt',
            )}>
            <CircularProgress
              value={aggregated_rating}
              radius={27.5}
              maxValue={100}
              activeStrokeColor={colorHexString(aggregated_rating)}
              inActiveStrokeColor={'black'}
              activeStrokeWidth={6}
              progressValueColor={colorHexString(aggregated_rating)}
              duration={2000}
            />
          </View>
        )}
      </View>
      <View style={tailwind('ml-3 flex-1 justify-center')}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={tailwind('w-60 font-objektiv-mk1-bold text-xl text-white')}>
          {name}
        </Text>
        <View>
          {first_release_date && (
            <Text
              style={tailwind(
                'font-objektiv-mk1-regular text-xs leading-5 text-white',
              )}>
              <Text style={tailwind('font-objektiv-mk1-bold text-sm')}>
                release:{' '}
              </Text>
              {dayjs.unix(first_release_date).format('LL')}
            </Text>
          )}
          {genresList && (
            <Text
              style={tailwind(
                'font-objektiv-mk1-regular text-xs leading-5 text-white',
              )}>
              <Text style={tailwind('font-objektiv-mk1-bold text-sm')}>
                genres:{' '}
              </Text>
              {genresList.join(', ')}
            </Text>
          )}
          {gameModeList && (
            <Text
              style={tailwind(
                'font-objektiv-mk1-regular text-xs leading-5 text-white',
              )}>
              <Text style={tailwind('font-objektiv-mk1-bold text-sm')}>
                game modes:{' '}
              </Text>
              {gameModeList.join(', ')}
            </Text>
          )}
        </View>
      </View>
    </>
  );
};
