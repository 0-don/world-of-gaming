import React from 'react';
import {Dimensions, ImageBackground, View} from 'react-native';
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
  const {width, height} = Dimensions.get('screen');
  return (
    <ImageBackground
      style={{...tailwind('flex-1')}}
      imageStyle={{
        width,
        height: height,
        backgroundColor: '#000',
      }}
      source={require('../assets/bg.png')}>
      <View style={{backgroundColor: 'rgba(0,0,0,0.65)', height: '100%'}}>
        {safeArea ? <SafeArea>{children}</SafeArea> : children}
      </View>
    </ImageBackground>
  );
};
