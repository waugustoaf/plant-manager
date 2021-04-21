import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeView } from './pageAreaView';
import StackRoutes from './stack.routes';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
