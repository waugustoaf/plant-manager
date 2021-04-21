import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import Button from '../../components/Button';
import { Container, Emoji, Form, FormFooter, Text, Title } from './styles';

const Confirmation: React.FC = () => {
  const navigation = useNavigation();

  const handleMoveOn = useCallback(() => {
    navigation.navigate('PlantSelect');
  }, []);

  return (
    <Container>
      <Form>
        <Emoji> 😄 </Emoji>

        <Title>Prontinho</Title>

        <Text>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <FormFooter>
          <Button onPress={handleMoveOn}>Começar</Button>
        </FormFooter>
      </Form>
    </Container>
  );
};

export default Confirmation;
