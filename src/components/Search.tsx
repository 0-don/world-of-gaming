import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import useSearchStore from '../store/SearchStore';
import {Input} from './elements/Input';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  const tailwind = useTailwind();
  const {searchTerm, setSearchTerm} = useSearchStore();
  return (
    <View style={tailwind('mx-6')}>
      <Input value={searchTerm} onChangeText={setSearchTerm} />
    </View>
  );
};
