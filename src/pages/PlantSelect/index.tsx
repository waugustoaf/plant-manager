import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { EnvironmentButton as Button } from '../../components/EnvironmentButton';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { api } from '../../services/api';
import { Container, Title, SubTitle, FlatView, PlantsView } from './styles';

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export const PlantSelect: React.FC = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  const handleEnvironmentSelected = useCallback(
    (environment: string) => {
      setEnvironmentSelected(environment);

      if (environment === 'all') {
        setFilteredPlants(plants);
        return;
      }

      const filtered = plants.filter((plant) =>
        plant.environments.includes(environment)
      );
      setFilteredPlants(filtered);
      return;
    },
    [filteredPlants]
  );

  const handleFetchMore = useCallback(
    (distance: number) => {
      if (distance < 1) return;
      if (loadedAll) return;

      setLoadingMore(true);
      setPage((value) => value + 1);
      fetchPlants();
    },
    [page, loadedAll]
  );

  const fetchPlants = useCallback(async () => {
    const { data } = await api.get(
      `/plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );

    if (data.length === 0) setLoadedAll(true);

    if (page > 1) {
      setPlants((value) => [...value, ...data]);
      setFilteredPlants((value) => [...value, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
      // setPage((value) => value + 1);
    }
    setLoadingMore(false);
  }, [page, plants, filteredPlants, loadedAll]);

  useEffect(() => {
    (async () => {
      const { data } = await await api.get(
        '/plants_environments?_sort=title&_order=asc'
      );
      setEnvironments([{ key: 'all', title: 'Todos' }, ...data]);
    })();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  if (environments.length === 0 || plants.length === 0) {
    return <Load />;
  }

  return (
    <Container>
      <Header lineTop='Olá,' lineBottom='Walther' />

      <Title>Em qual ambiente</Title>
      <SubTitle>você quer colocar sua planta?</SubTitle>

      <FlatView>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <Button
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}>
              {item.title}
            </Button>
          )}
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </FlatView>

      <PlantsView>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCardPrimary data={{ name: item.name, photo: item.photo }} />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
        />
      </PlantsView>

      {loadingMore && <ActivityIndicator size='large' color='#32B768' />}
    </Container>
  );
};
