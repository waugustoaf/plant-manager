import React from 'react';
import {
  ButtonIcon,
  Container,
  Image,
  StyledButton,
  SubTitle,
  Title,
} from './styles';
import wateringImg from '../../assets/watering.png';

const Welcome: React.FC = () => {
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

      <StyledButton>
        <ButtonIcon name='chevron-right' />
      </StyledButton>
    </Container>
  );
};

export default Welcome;
