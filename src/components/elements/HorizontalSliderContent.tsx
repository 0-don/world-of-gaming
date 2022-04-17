/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, FlatList, View, Image, ViewStyle, ImageStyle} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

interface HorizontalSliderContentProps {
  data: (string | null | undefined)[] | undefined;
  img?: boolean;
  name?: string;
  viewStyle?: ViewStyle;
  imgStyle?: ImageStyle;
}

export const HorizontalSliderContent: React.FC<
  HorizontalSliderContentProps
> = ({name, data, img, viewStyle, imgStyle}) => {
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
        renderItem={({item}) =>
          !img ? (
            <Text
              style={{
                ...tailwind(
                  'mx-1 rounded-full bg-purple px-2 font-objektiv-mk1-light font-semibold text-white',
                ),
                ...viewStyle,
              }}>
              {item}
            </Text>
          ) : (
            <View
              style={{
                ...viewStyle,
              }}>
              <Image
                borderRadius={10}
                resizeMode="cover"
                style={{
                  ...imgStyle,
                }}
                source={{uri: item!}}
              />
            </View>
          )
        }
        keyExtractor={item => item!}
      />
    </>
  );
};
