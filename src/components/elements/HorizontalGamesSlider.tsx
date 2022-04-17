import React from 'react';
import {FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {GamesDetailsNavigationProp} from '../../screens/GameDetails';
import {GameDetailsQueryType} from '../../utils/types';

interface HorizontalGamesSliderProps {
  navigation: GamesDetailsNavigationProp;
  data: NonNullable<GameDetailsQueryType>['similar_games'];
  name?: string;
}

export const HorizontalGamesSlider: React.FC<HorizontalGamesSliderProps> = ({
  name,
  data,
  navigation,
}) => {
  const tailwind = useTailwind();

  if (data && data.length === 0) {
    return null;
  }

  return (
    <>
      {name && (
        <Text style={tailwind('my-2 ml-1 font-objektiv-mk1-bold text-white')}>
          {name}
        </Text>
      )}
      <FlatList
        horizontal
        style={tailwind('mt-2')}
        data={data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.slug!}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('GameDetails', {id: item.id!})}>
            <Image
              borderRadius={10}
              resizeMode="cover"
              source={{uri: item.cover?.url!}}
              style={tailwind('mx-2 h-36 w-36')}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={tailwind(
                'my-2 ml-1 w-36 font-objektiv-mk1-bold text-white',
              )}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </>
  );
};
