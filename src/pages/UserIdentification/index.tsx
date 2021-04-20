import React, { useState } from 'react';
import { Platform } from 'react-native';
import Button from '../../components/Button';
import {
  Container,
  Emoji,
  Form,
  FormFooter,
  Input,
  KeyboardContainer,
  Title,
} from './styles';

const UserIdentification: React.FC = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  function handleInput() {
    setIsFocused((value) => !value);
  }

  return (
    <Container>
      <KeyboardContainer
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Form>
          <Emoji> {!isEmpty ? '😄' : '😃'} </Emoji>

          <Title>
            Como podemos {`\n`}
            chamar você?
          </Title>

          <Input
            placeholder='Digite um nome'
            onChangeText={(value) => setIsEmpty(!value)}
            onBlur={handleInput}
            onFocus={handleInput}
            isFocused={isFocused}
            isFilled={!isEmpty}
          />

          <FormFooter>
            <Button isEmpty={isEmpty}>Confirmar</Button>
          </FormFooter>
        </Form>
      </KeyboardContainer>
    </Container>
  );
};

export default UserIdentification;
