import React from 'react';
import {
  FlatList,
  Linking,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTailwind} from 'tailwind-rn/dist';

interface HorizontalVideoSliderProps {
  data:
    | {name: string | null | undefined; video_id: string | null | undefined}[]
    | undefined;
  name?: string;
  viewStyle?: ViewStyle;
}

export const HorizontalVideoSlider: React.FC<HorizontalVideoSliderProps> = ({
  name,
  data,
  viewStyle,
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
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            style={tailwind('mx-1 flex-row rounded-full bg-purple px-2 ')}
            onPress={async () =>
              await Linking.openURL(
                `https://www.youtube.com/watch?v=${item.video_id!}`,
              )
            }>
            <Icon
              style={tailwind('mx-1')}
              name="youtube-play"
              size={20}
              color={'white'}
            />
            <Text
              style={{
                ...tailwind('font-objektiv-mk1-light font-semibold text-white'),
                ...viewStyle,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.video_id!}
      />
    </>
  );
};
