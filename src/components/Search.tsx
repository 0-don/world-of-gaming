import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {Input} from './elements/Input';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  const tailwind = useTailwind();
  const [search, setSearch] = React.useState('');
  return (
    <View style={tailwind('mx-6')}>
      <Input value={search} onChangeText={setSearch} />
    </View>
  );
};
