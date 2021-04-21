import React from 'react';
import { Container, Image, TextBottom, TextsView, TextTop } from './styles';

interface HeaderProps {
  lineTop: string;
  lineBottom?: string;
}

import userImg from '../../assets/walther.jpeg';

export const Header: React.FC<HeaderProps> = ({ lineTop, lineBottom }) => {
  return (
    <Container>
      <TextsView>
        <TextTop>{lineTop}</TextTop>
        <TextBottom>{lineBottom}</TextBottom>
      </TextsView>

      <Image source={userImg} />
    </Container>
  );
};
