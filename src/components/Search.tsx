import React from 'react';

import {useTailwind} from 'tailwind-rn/dist';

import useSearchStore from '../store/SearchStore';
import {Input} from './elements/Input';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  const tailwind = useTailwind();
  const {searchTerm, setSearchTerm} = useSearchStore();
  return (
    <>
      <Input value={searchTerm} onChangeText={setSearchTerm} />
    </>
  );
};
