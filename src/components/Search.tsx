import React from 'react';
import {TextInput, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {MailIcon} from 'react-native-heroicons/solid';
import useSearchStore from '../store/SearchStore';
import {Input} from './elements/Input';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  const tailwind = useTailwind();
  const {searchTerm, setSearchTerm} = useSearchStore();
  return (
    // <TextInput
    //   style={tailwind('dark:bg-black dark:text-white')}
    //   onChangeText={setSearchTerm}
    //   value={searchTerm}
    // />
    // <View style={tailwind('relative rounded-md bg-white')}>
    //   <View
    //     style={tailwind(
    //       'absolute inset-y-2 left-0 pl-3 flex items-center pointer-events-none',
    //     )}>
    //     <MailIcon
    //       style={tailwind('h-5 w-5 text-gray-400')}
    //       aria-hidden="true"
    //     />
    //   </View>
    //   <TextInput
    //     style={tailwind(
    //       'focus:ring-indigo-500 focus:border-indigo-500 pl-10 sm:text-sm border-gray-300 rounded-md',
    //     )}
    //     placeholder="you@example.com"
    //   />
    // </View>
    <>
      <Input value={searchTerm} onChangeText={setSearchTerm} />
    </>
  );
};
