import React, { useCallback } from 'react';
import { Container, Image, TextBottom, TextsView, TextTop } from './styles';

interface HeaderProps {
  lineTop: string;
  lineBottom?: string;
}

import userImg from '../../assets/walther.jpeg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

export const Header: React.FC<HeaderProps> = ({ lineTop, lineBottom }) => {
  const navigation = useNavigation();

  const handleRemoveUser = useCallback(async () => {
    await AsyncStorage.removeItem('@plantmanager:user');
    navigation.navigate('Welcome');
  }, []);

  return (
    <Container>
      <TextsView>
        <TextTop>{lineTop}</TextTop>
        <TextBottom>{lineBottom}</TextBottom>
      </TextsView>

      <TouchableWithoutFeedback onPress={handleRemoveUser}>
        <Image source={userImg} />
      </TouchableWithoutFeedback>
    </Container>
  );
};
