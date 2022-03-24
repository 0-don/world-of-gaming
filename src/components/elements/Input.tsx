import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <Icon name="" size={30} color="#900" />
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
