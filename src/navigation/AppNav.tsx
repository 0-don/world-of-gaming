import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Games} from '../screens/Games';

const Stack = createNativeStackNavigator();

interface AppNavProps {}

export const AppNav: React.FC<AppNavProps> = ({}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Games" component={Games} />
    </Stack.Navigator>
  );
};
