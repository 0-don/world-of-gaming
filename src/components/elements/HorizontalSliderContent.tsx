import React from 'react';
import {Text, FlatList} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

interface HorizontalSliderContentProps {
  name: string;
  img?: boolean;
  data: (string | null | undefined)[] | undefined;
}

export const HorizontalSliderContent: React.FC<
  HorizontalSliderContentProps
> = ({name, data}) => {
  const tailwind = useTailwind();

  if (data && data.length === 0) {
    return null;
  }

  return (
    <>
      <Text style={tailwind('my-2 ml-1 font-objektiv-mk1-bold text-white')}>
        {name}
      </Text>
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Text
            style={tailwind(
              'mx-1 rounded-full bg-purple px-2 font-objektiv-mk1-light font-semibold text-white',
            )}>
            {item}
          </Text>
        )}
        keyExtractor={item => item!}
      />
    </>
  );
};
