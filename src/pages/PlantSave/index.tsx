import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/core';
import { format, isBefore } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import React, { useCallback, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import waterDrop from '../../assets/waterdrop.png';
import { ButtonText } from '../../components/Button/styles';
import { PlantProps, plantSave } from '../../libs/storage';
import {
  AlertLabel,
  BackButton,
  Container,
  Controller,
  DataTimePickerChangeText,
  DataTimePickerTimeText,
  DateTimeContainer,
  DateTimePickerButton,
  PlantAbout,
  PlantInfo,
  PlantName,
  RegisterButton,
  TipContainer,
  TipImage,
  TipText,
} from './styles';

interface Params {
  plant: PlantProps;
}

export const PlantSave: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  const navigation = useNavigation();

  const handleChangeTime = useCallback(
    (event: Event, dateTime: Date | undefined) => {
      if (Platform.OS === 'android') {
        setShowDatePicker((value) => !value);
      }

      if (dateTime && isBefore(dateTime, new Date())) {
        setSelectedDateTime(new Date());
        return Alert.alert('Escolha uma hora no futuro! ⏰');
      }

      if (dateTime) {
        setSelectedDateTime(dateTime);
      }
    },
    [showDatePicker, selectedDateTime]
  );

  const handleToggleAndroidDatetimePickerView = useCallback(() => {
    setShowDatePicker((value) => !value);
  }, [showDatePicker]);

  const handleSave = useCallback(async () => {
    try {
      await plantSave({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle:
          'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'hug',
        nextScreen: 'TabRoutes',
      });
    } catch {
      Alert.alert('Não foi possível salvar a planta. 😢');
    }
  }, [plant, selectedDateTime]);

  return (
    <Container>
      <PlantInfo>
        <BackButton>
          <SvgFromUri uri={plant.photo} height={150} width={150} />
        </BackButton>

        <PlantName>{plant.name}</PlantName>

        <PlantAbout>{plant.about}</PlantAbout>
      </PlantInfo>

      <Controller>
        <TipContainer>
          <TipImage source={waterDrop} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado</AlertLabel>

        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode='time'
            display='spinner'
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === 'android' && (
          <DateTimeContainer>
            <DataTimePickerTimeText>
              {format(selectedDateTime, 'HH:mm', {
                locale: ptBR,
              })}{' '}
              hrs
            </DataTimePickerTimeText>
            <DateTimePickerButton
              onPress={handleToggleAndroidDatetimePickerView}
            >
              <DataTimePickerChangeText>Mudar horário</DataTimePickerChangeText>
            </DateTimePickerButton>
          </DateTimeContainer>
        )}

        <RegisterButton onPress={handleSave}>
          <ButtonText>Cadastrar planta</ButtonText>
        </RegisterButton>
      </Controller>
    </Container>
  );
};
