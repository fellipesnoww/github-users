import React, {useState} from 'react';
import {Container, TextInput} from './styles';
import SearchIcon from '../../../assets/icons/search.svg';
import FilterIcon from '../../../assets/icons/filter_list.svg';

import {useTheme} from 'styled-components';
import {TextInputProperties} from 'react-native';

interface InputProps extends TextInputProperties {
  icon?: 'search' | 'filter';
  isFocused?: boolean;
  focusAction: (e: any) => void;
}

const InputSearch = React.forwardRef((props, ref) => {
  const theme = useTheme();

  return (
    <Container isFocused={props.isFocused} onPress={props.focusAction}>
      {props.icon === 'search' ? (
        <SearchIcon width={24} height={24} />
      ) : (
        <FilterIcon width={24} height={24} />
      )}
      {props.isFocused && (
        <TextInput
          placeholderTextColor={theme.colors.secondary}
          {...props}
          ref={ref}
          isFocused={props.isFocused}
        />
      )}
    </Container>
  );
});

export default InputSearch;

// export default function InputSearch({
//   icon = 'search',
//   isFocused = false,
//   focusAction,
//   ...props
// }: InputProps) {

// }
