import { formatDistance } from 'date-fns/esm';
import { ptBR } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import waterDrop from '../../assets/waterdrop.png';
import { Header } from '../../components/Header';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { loadPlants, PlantProps } from '../../libs/storage';
import {
  Container,
  Plants,
  PlantsTitle,
  SpotLight,
  SpotLightImage,
  SpotLightText,
} from './styled';

export const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState('');

  useEffect(() => {
    (async () => {
      const data = await loadPlants();

      const nextTime = formatDistance(
        new Date(data[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        {
          locale: ptBR,
        }
      );

      setNextWatered(`Não esqueça de regar a ${data[0].name} em ${nextTime}`);
      setMyPlants(data);
      setLoading(false);
    })();
  }, [myPlants, nextWatered]);

  return (
    <Container>
      <Header lineTop='Minhas' lineBottom='Plantinhas' />

      <SpotLight>
        <SpotLightImage source={waterDrop} />
        <SpotLightText>{nextWatered}</SpotLightText>
      </SpotLight>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <FlatList
          data={myPlants}
          renderItem={({ item }) => <PlantCardSecondary data={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </Container>
  );
};
