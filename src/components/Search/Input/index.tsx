import React, {useState} from 'react';
import {Container, TextInput} from './styles';
import SearchIcon from '../../../assets/icons/search.svg';
import FilterIcon from '../../../assets/icons/filter_list.svg';

import {useTheme} from 'styled-components';
import {TextInputProperties} from 'react-native';

interface InputProps extends TextInputProperties {
  icon?: 'search' | 'filter';
  lightBackground?: boolean;
}

export default function InputSearch({icon = 'search', lightBackground = false, style, ...props}: InputProps) {
  const theme = useTheme();
  return (
    <Container lightBackground={lightBackground} style={style}>
      {icon === 'search' ? (
        <SearchIcon width={24} height={24} />
      ) : (
        <FilterIcon width={24} height={24} />
      )}

      <TextInput placeholderTextColor={theme.colors.secondary} {...props} />
    </Container>
  );
}
