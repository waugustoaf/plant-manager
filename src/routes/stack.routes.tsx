import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';
import { TabRoutes } from './tab.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Load } from '../components/Load';

const StackRoutes: React.FC = () => {
  const stackRoutes = createStackNavigator();

  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUsername(user || '');
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <stackRoutes.Navigator
      headerMode='none'
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}
      initialRouteName={username ? 'TabRoutes' : 'Welcome'}
    >
      <stackRoutes.Screen name='Welcome' component={Welcome} />
      <stackRoutes.Screen
        name='UserIdentification'
        component={UserIdentification}
      />
      <stackRoutes.Screen name='Confirmation' component={Confirmation} />
      <stackRoutes.Screen name='TabRoutes' component={TabRoutes} />
      <stackRoutes.Screen name='PlantSave' component={PlantSave} />
      <stackRoutes.Screen name='MyPlants' component={MyPlants} />
    </stackRoutes.Navigator>
  );
};

export default StackRoutes;
