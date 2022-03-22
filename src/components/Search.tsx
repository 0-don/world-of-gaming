import React from 'react';
import {TextInput} from 'react-native';
import useSearchStore from '../store/SearchStore';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  const {searchTerm, setSearchTerm} = useSearchStore();
  return <TextInput sonChangeText={setSearchTerm} value={searchTerm} />;
};
