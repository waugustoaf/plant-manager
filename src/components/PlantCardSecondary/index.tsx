import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import { SvgFromUri } from 'react-native-svg';
import {
  ButtonTitle,
  Container,
  Details,
  RemoveButton,
  Time,
  TimeLabel,
} from './styles';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export const PlantCardSecondary: React.FC<PlantProps> = ({
  data,
  handleRemove,
  ...rest
}) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RemoveButton onPress={handleRemove}>
              <Feather name='trash' size={32} color='#FFF' />
            </RemoveButton>
          </View>
        </Animated.View>
      )}
    >
      <Container {...rest}>
        <SvgFromUri uri={data.photo} width={50} height={50} />
        <ButtonTitle>{data.name}</ButtonTitle>
        <Details>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{data.hour}</Time>
        </Details>
      </Container>
    </Swipeable>
  );
};
