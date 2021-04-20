import { useNavigation } from '@react-navigation/core';
import React from 'react';
import wateringImg from '../../assets/watering.png';
import {
  ButtonIcon,
  Container,
  Image,
  StyledButton,
  SubTitle,
  Title,
} from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <Container>
      <Title>
        Gerencie {`\n`}
        suas plantas de {`\n`}
        forma fácil
      </Title>

      <Image source={wateringImg} resizeMode='contain' />

      <SubTitle>
        Não esqueça de regar suas plantas. {'\n'}
        Nós cuidamos de lembrar você sempre que precisar.
      </SubTitle>

      <StyledButton onPress={handleStart}>
        <ButtonIcon name='chevron-right' />
      </StyledButton>
    </Container>
  );
};

export default Welcome;
