import { formatDistance } from 'date-fns/esm';
import { ptBR } from 'date-fns/locale';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import waterDrop from '../../assets/waterdrop.png';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';
import { deletePlant, loadPlants, PlantProps } from '../../libs/storage';
import {
  Container,
  Plants,
  PlantsTitle,
  PlantsView,
  SpotLight,
  SpotLightImage,
  SpotLightText,
} from './styled';

export const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState('');

  const attNextPlantToWatering = useCallback(async () => {
    if (myPlants.length === 0) {
      return setNextWatered(`Não esqueça de regar suas plantas.`);
    }

    const data = await loadPlants();

    const nextTime = formatDistance(
      new Date(data[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      {
        locale: ptBR,
      }
    );

    setNextWatered(`Não esqueça de regar a ${data[0].name} em ${nextTime}`);
  }, [myPlants]);

  const handleRemove = useCallback(
    async (plant: PlantProps) => {
      Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
        {
          text: 'Não 🙏',
          style: 'cancel',
        },
        {
          text: 'Sim 😢',
          onPress: async () => {
            try {
              deletePlant(plant);

              setMyPlants((value) =>
                value.filter((item) => item.id !== plant.id)
              );
              await attNextPlantToWatering();
            } catch (err) {
              Alert.alert('Não foi possível remover! 😢');
            }
          },
        },
      ]);
    },
    [myPlants, nextWatered]
  );
  useEffect(() => {
    attNextPlantToWatering();
  }, [myPlants]);

  useEffect(() => {
    (async () => {
      const data = await loadPlants();

      setMyPlants(data);
      await attNextPlantToWatering();
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <Header lineTop='Minhas' lineBottom='Plantinhas' />

      <SpotLight>
        <SpotLightImage source={waterDrop} />
        {myPlants.length !== 0 ? (
          <SpotLightText>{nextWatered}</SpotLightText>
        ) : (
          <SpotLightText>
            Você não possui nenhuma planta cadastrada
          </SpotLightText>
        )}
      </SpotLight>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <PlantsView>
          <FlatList
            data={myPlants}
            renderItem={({ item }) => (
              <PlantCardSecondary
                data={item}
                handleRemove={() => {
                  handleRemove(item);
                }}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </PlantsView>
      </Plants>
    </Container>
  );
};
