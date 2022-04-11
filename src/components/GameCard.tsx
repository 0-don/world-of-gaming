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

    return logos?.map(logo => (
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.25)',
          ...tailwind('mr-1 rounded-md p-1'),
        }}>
        <Image
          resizeMode="contain"
          style={tailwind('h-5 [width:undefined] [aspectRatio:1]')}
          key={logo}
          source={{uri: logo || ''}}
        />
      </View>
    ));
  };

  const img = cover || artwork || screenshot;

  return (
    <View style={tailwind('mx-5 mt-2')}>
      <View style={tailwind('flex-row rounded-xl bg-dark py-2')}>
        {img?.url && img?.width && img.height && (
          <Image
            source={{uri: img.url}}
            resizeMode="contain"
            style={tailwind('mx-2 h-24 rounded-md [aspectRatio:0.75]')}
          />
        )}
        <View style={tailwind('flex-1 justify-between')}>
          <View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={tailwind('font-objektiv-mk1-bold text-white')}>
              {name}
            </Text>
            {first_release_date && (
              <Text
                style={tailwind('mt-0.5 font-objektiv-mk1-regular text-white')}>
                release: {dayjs.unix(first_release_date).format('LL')}
              </Text>
            )}
          </View>
          <View style={tailwind('flex-row')}>{platformLogos()}</View>
        </View>
      </View>
    </View>
  );
};
