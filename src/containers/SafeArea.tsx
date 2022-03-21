import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

interface SafeAreaProps {}

export const SafeArea: React.FC<SafeAreaProps> = ({children}) => {
  return <SafeAreaView style={styles.SafeArea}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
