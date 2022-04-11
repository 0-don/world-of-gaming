/* eslint-disable react-native/no-inline-styles */
import dayjs from 'dayjs';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GamesQueryType} from '../utils/types';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
interface GameCardProps {
  game: GamesQueryType;
}

export const GameCard: React.FC<GameCardProps> = ({
  game: {cover, artworks, screenshots, first_release_date, name, platforms},
}) => {
  const tailwind = useTailwind();

  const artwork = artworks?.find(art => art);
  const screenshot = screenshots?.find(scr => scr);

  const platformLogos = () => {
    const logos = platforms
      ?.filter(({platform_logo}) => platform_logo?.url)
      .map(({platform_logo}) => platform_logo?.url?.replace?.('.jpg', '.png'));
    console.log(logos);
    return logos?.map(logo => (
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.25)',
          ...tailwind('mr-1 rounded-md p-1'),
        }}>
        <Image
          resizeMode="contain"
          style={tailwind('h-6 [width:undefined] [aspectRatio:1]')}
          key={logo}
          source={{uri: logo || ''}}
        />
      </View>
    ));
  };

  return (
    <View style={tailwind('mx-5 mt-2')}>
      <View style={tailwind('flex-row bg-dark')}>
        <Image
          source={{
            uri: cover?.url || artwork?.url || screenshot?.url || '',
          }}
          resizeMode="contain"
          // style={tailwind('w-24 [height:undefined] [aspectRatio:1]')}
          style={tailwind('h-24 [width:undefined] [aspectRatio:1]')}
        />
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={tailwind('font-objektiv-mk1-bold text-white')}>
            {name}
          </Text>
          {first_release_date && (
            <Text style={tailwind('font-objektiv-mk1-regular text-white')}>
              release: {dayjs.unix(first_release_date).format('LL')}
            </Text>
          )}
          <View style={tailwind('mt-2 flex-row')}>{platformLogos()}</View>
        </View>
      </View>
    </View>
  );
};
