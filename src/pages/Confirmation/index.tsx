import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useCallback } from 'react';
import Button from '../../components/Button';
import { Container, Emoji, Form, FormFooter, Text, Title } from './styles';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄',
};

const Confirmation: React.FC = () => {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    icon,
    buttonTitle,
    nextScreen,
  } = routes.params as Params;

  const handleMoveOn = useCallback(() => {
    navigation.navigate(nextScreen);
  }, [nextScreen]);

  return (
    <Container>
      <Form>
        <Emoji> {emojis[icon]} </Emoji>

        <Title>{title}</Title>

        <Text>{subtitle}</Text>

        <FormFooter>
          <Button onPress={handleMoveOn}>{buttonTitle}</Button>
        </FormFooter>
      </Form>
    </Container>
  );
};

export default Confirmation;
