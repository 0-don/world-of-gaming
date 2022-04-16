/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ViewStyle} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {useTailwind} from 'tailwind-rn/dist';

interface BlockProps {
  style: ViewStyle;
}

export const Block: React.FC<BlockProps> = ({children, style}) => {
  const tailwind = useTailwind();
  return (
    <Shadow
      viewStyle={tailwind('flex-row items-start')}
      containerViewStyle={tailwind('flex-row items-start mx-2')}
      distance={3}
      startColor={'#000'}>
      <View
        style={{
          ...tailwind(' items-start rounded-md py-2'),
          ...style,
          backgroundColor: 'rgba(23,23,23,0.85)',
        }}>
        {children}
      </View>
    </Shadow>
  );
};
