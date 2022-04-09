import React from 'react';
import {View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {useGamesQuery} from '../generated/graphql';
import {Input} from './elements/Input';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  const tailwind = useTailwind();
  const {data} = useGamesQuery({variables: {where: {name: {contains: 'god'}}}});
  const [search, setSearch] = React.useState('');

  console.log(data);
  return (
    <View style={tailwind('mx-6')}>
      <Input value={search} onChangeText={setSearch} />
    </View>
  );
};
