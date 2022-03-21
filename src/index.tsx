import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {SafeArea} from './containers/SafeArea';

export const Main = () => {
  const tailwind = useTailwind();

  return (
    <SafeArea>
      <ImageBackground
        style={tailwind('flex-1 absolute h-full w-full')}
        source={require('./assets/bg.png')}
      />
      <View style={tailwind('items-center justify-center ')}>
        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
          <Text style={tailwind('text-blue-800 font-semibold')}>
            Hello Tailwind
          </Text>
        </View>
      </View>
    </SafeArea>
  );
};
