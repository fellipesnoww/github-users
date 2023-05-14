import React, {useState} from 'react';
import {Container, TextInput} from './styles';
import SearchIcon from '../../../assets/icons/search.svg';
import FilterIcon from '../../../assets/icons/filter_list.svg';

import {useTheme} from 'styled-components';
import {TextInputProperties} from 'react-native';

interface InputProps extends TextInputProperties {
  icon?: 'search' | 'filter';
}

export default function InputSearch({icon = 'search', ...props}: InputProps) {
  const theme = useTheme();
  return (
    <Container>
      {icon === 'search' ? (
        <SearchIcon width={24} height={24} />
      ) : (
        <FilterIcon width={24} height={24} />
      )}

      <TextInput placeholderTextColor={theme.colors.secondary} {...props} />
    </Container>
  );
}
