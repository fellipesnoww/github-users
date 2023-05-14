import React from 'react';
import {Container} from './styles';
import FilterIcon from '../../../assets/icons/filter_list.svg';
import {TouchableOpacityProps} from 'react-native';

export default function FilterButton({...props}: TouchableOpacityProps) {
  return (
    <Container {...props}>
      <FilterIcon width={24} height={24} />
    </Container>
  );
}
