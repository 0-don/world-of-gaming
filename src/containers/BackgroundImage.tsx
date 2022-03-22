import React from 'react';
import {ImageBackground} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {SafeArea} from './SafeArea';

interface BackgroundImageProps {
  safeArea?: true;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  safeArea,
  children,
}) => {
  const tailwind = useTailwind();
  return (
    <ImageBackground
      style={tailwind('flex-1')}
      source={require('../assets/bg.png')}>
      {safeArea ? <SafeArea>{children}</SafeArea> : children}
    </ImageBackground>
  );
};
