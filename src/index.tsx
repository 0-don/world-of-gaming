import React from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {Search} from './components/Search';
import {BackgroundImage} from './containers/BackgroundImage';

export const Main = () => {
  const tailwind = useTailwind();

  return (
    <BackgroundImage safeArea>
      <View style={tailwind('items-center justify-center ')}>
        <View style={tailwind('bg-black dark:bg-white px-3 py-1 rounded-full')}>
          <Text style={tailwind('dark:text-blue-800 text-white font-semibold')}>
            Hello Tailwind
          </Text>
        </View>
        <Text style={tailwind('dark:bg-red-500 bg-white')}>Asda</Text>
      </View>
      <Search />
    </BackgroundImage>
  );
};
