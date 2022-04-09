import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTailwind} from 'tailwind-rn/dist';
import {Shadow} from 'react-native-shadow-2';

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
  const [focus, setFocus] = useState(false);
  const tailwind = useTailwind();

  return (
    <Shadow distance={3} startColor={'#000'}>
      <View
        style={tailwind(
          `relative h-10 w-full flex-row flex-wrap items-center rounded-md border  ${
            focus ? 'border-purple-dark' : 'border-lightGray'
          } bg-dark-light`,
        )}>
        <Icon
          style={tailwind('w-1/12 pl-1.5 ')}
          name="search"
          size={20}
          color={`${focus ? '#9147ff' : 'white'}`}
        />
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={tailwind('w-11/12 text-white')}
          placeholder={placeholder}
          onChangeText={onChangeText}
          selectionColor={'#9147ff'}
          value={value}
        />
      </View>
    </Shadow>
  );
};
