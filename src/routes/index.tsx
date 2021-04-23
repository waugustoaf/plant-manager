import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import StackRoutes from './stack.routes';
import * as Notifications from 'expo-notifications';

const Routes: React.FC = () => {
  useEffect(() => {
    (async () => {
      const {
        status: existingStatus,
      } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Permita-nos enviar notificações a você!');
        return;
      }
    })();
  });

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
