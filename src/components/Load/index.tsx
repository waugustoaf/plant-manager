import React from 'react';
import { Middler } from './styles';
import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/load.json';

export const Load: React.FC = () => {
  return (
    <Middler>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={{ backgroundColor: 'transparent', width: 200 }}
      />
    </Middler>
  );
};
