import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ButtonText, Container } from './styles';
import { SvgFromUri } from 'react-native-svg';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export const PlantCardPrimary: React.FC<PlantProps> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <ButtonText>{data.name}</ButtonText>
    </Container>
  );
};
