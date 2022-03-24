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
  const test = '<div class=" bg-white relative rounded-md ">asd</div>';

  return (
    <View style={tailwind('relative rounded-md bg-white')}>
      <View
        style={tailwind(
          'pointer-events-none absolute inset-y-2 left-0 flex items-center pl-3',
        )}>
        <Icon name="" size={30} color="#900" />
      </View>
      <TextInput
        style={tailwind('rounded-md border-2 border-gray-900 pl-10 sm:text-sm')}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};
