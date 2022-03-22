import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface SafeAreaProps {
  style?: ViewStyle;
}

export const SafeArea: React.FC<SafeAreaProps> = ({style, children}) => {
  return (
    <SafeAreaView style={{...styles.SafeArea, ...style}}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
