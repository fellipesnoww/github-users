import React from 'react';
import {Container, Name} from './styles';
import AddButton from '../../assets/icons/circle_plus.svg';
import RemoveButton from '../../assets/icons/circle_close.svg';

export enum TypeAction {
  none,
  remove,
  add,
}

interface TopicProps {
  name: string;
  typeAction: TypeAction;
  onPress?: () => void;
}

export function Topic({name, typeAction, onPress}: TopicProps) {
  function getIconType() {
    switch (typeAction) {
      case TypeAction.add:
        return <AddButton width={16} height={16} />;
      case TypeAction.remove:
        return <RemoveButton width={16} height={16} />;

      case TypeAction.none:
      default:
        return <></>;
    }
  }

  function nameTransform() {
    if (typeAction === TypeAction.none) {
      return `#${name}`;
    }
    return name;
  }

  return (
    <Container onPress={onPress} disabled={typeAction === TypeAction.none}>
      <Name isSmallText={typeAction === TypeAction.none}>
        {nameTransform()}
      </Name>
      {getIconType()}
    </Container>
  );
}
