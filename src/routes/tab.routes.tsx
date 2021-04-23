import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlantSelect } from '../pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';
import { MyPlants } from '../pages/MyPlants';

export const TabRoutes: React.FC = () => {
  const AppTab = createBottomTabNavigator();
  const { Navigator, Screen } = AppTab;

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: '#32B768',
        inactiveTintColor: '#52665A',
        labelPosition: 'beside-icon',
        style: {
          paddingVertical: 20,
          height: 88,
        },
      }}
    >
      <Screen
        name='Minhas Plantas'
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name='Nova Planta'
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name='add-circle-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
};
