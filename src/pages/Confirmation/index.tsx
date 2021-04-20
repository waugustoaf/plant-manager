import React, { useState } from 'react';
import { Platform } from 'react-native';
import Button from '../../components/Button';
import { Container, Emoji, Form, FormFooter, Title, Text } from './styles';

const Confirmation: React.FC = () => {
  return (
    <Container>
      <Form>
        <Emoji> 😄 </Emoji>

        <Title>Prontinho</Title>

        <Text>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <FormFooter>
          <Button>Começar</Button>
        </FormFooter>
      </Form>
    </Container>
  );
};

export default Confirmation;
