import React from 'react';
import ContentLoader, {Circle, Rect} from 'react-content-loader/native';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';

export const FlatListLoader: React.FC = () => {
  const tailwind = useTailwind();

  const loaders = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <View style={tailwind('mx-5')}>
      {loaders.map(i => (
        <View key={i} style={tailwind('mt-2 rounded-xl bg-dark px-2')}>
          <ContentLoader
            viewBox="0 0 380 70"
            speed={1}
            height={70}
            width={'100%'}
            backgroundColor={'#333'}
            foregroundColor={'#999'}>
            <Circle cx="30" cy="30" r="30" />
            <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          </ContentLoader>
        </View>
      ))}
    </View>
  );
};
