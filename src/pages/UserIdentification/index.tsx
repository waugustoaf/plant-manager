import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
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

interface InputValueReference {
  value: string;
}

const UserIdentification: React.FC = () => {
  const navigation = useNavigation();

  const [isEmpty, setIsEmpty] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState('');

  async function handleSubmit() {
    if (isEmpty) return Alert.alert('Me diz como chamar você 😢');

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
    } catch {
      Alert.alert('Não foi possível salvar o seu nome. 😢');
    }

    navigation.navigate('Confirmation', {
      title: 'Prontinho',
      subtitle:
        'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
      buttonTitle: 'Começar',
      icon: 'smile',
      nextScreen: 'TabRoutes',
    });
  }

  function handleInput() {
    setIsFocused((value) => !value);
  }

  return (
    <Container>
      <KeyboardContainer
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Form>
          <Emoji> {!isEmpty ? '😄' : '😃'} </Emoji>

          <Title>
            Como podemos {`\n`}
            chamar você?
          </Title>

          <Input
            placeholder='Digite um nome'
            onChangeText={(value) => {
              setIsEmpty(!value);
              setName(value);
            }}
            onBlur={handleInput}
            onFocus={handleInput}
            isFocused={isFocused}
            isFilled={!isEmpty}
          />

          <FormFooter>
            <Button onPress={handleSubmit} isEmpty={isEmpty}>
              Confirmar
            </Button>
          </FormFooter>
        </Form>
      </KeyboardContainer>
    </Container>
  );
};

export default UserIdentification;
