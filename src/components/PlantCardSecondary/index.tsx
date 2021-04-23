import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { ButtonTitle, Container, Details, Time, TimeLabel } from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

export const PlantCardSecondary: React.FC<PlantProps> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <SvgFromUri uri={data.photo} width={50} height={50} />
      <ButtonTitle>{data.name}</ButtonTitle>
      <Details>
        <TimeLabel>Regar às</TimeLabel>
        <Time>{data.hour}</Time>
      </Details>
    </Container>
  );
};
