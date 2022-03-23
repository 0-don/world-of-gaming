import React from 'react';
import {View, TextInput} from 'react-native';
import {MailIcon} from 'react-native-heroicons/solid';
import {useTailwind} from 'tailwind-rn/dist';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('relative rounded-md bg-white')}>
      <View
        style={tailwind(
          'absolute inset-y-2 left-0 pl-3 flex items-center pointer-events-none',
        )}>
        <MailIcon
          style={tailwind('h-5 w-5 text-gray-400')}
          aria-hidden="true"
        />
      </View>
      <TextInput
        style={tailwind('pl-10 sm:text-sm border-gray-900 border-2 rounded-md')}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};
