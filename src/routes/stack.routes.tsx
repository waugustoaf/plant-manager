import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../pages/Welcome';
import UserIdentification from '../pages/UserIdentification';
import Confirmation from '../pages/Confirmation';

const StackRoutes: React.FC = () => {
  const stackRoutes = createStackNavigator();

  return (
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF'
        }
      }}
      initialRouteName="Welcome"
    >
      <stackRoutes.Screen name='Welcome' component={Welcome} />
      <stackRoutes.Screen name='Confirmation' component={Confirmation} />
      <stackRoutes.Screen
        name='UserIdentification'
        component={UserIdentification}
      />
    </stackRoutes.Navigator>
  );
};

export default StackRoutes;
