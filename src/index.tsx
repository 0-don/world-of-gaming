import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';

export const Main = () => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView style={tailwind('h-full flex-1')}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View style={tailwind('pt-12')}>
        <View style={tailwind('bg-blue-200 px-3 py-1  rounded-full')}>
          <Text style={tailwind('text-blue-800 font-semibold')}>
            Hello Tailwind
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
