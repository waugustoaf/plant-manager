import {
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_700Bold,
  useFonts,
} from '@expo-google-fonts/jost';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Theme from './src/styles/theme';
import AppLoading from 'expo-app-loading';
import UserIdentification from './src/pages/UserIdentification';

export default function App() {
  const [fontJost] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_700Bold,
  });

  if (!fontJost) return <AppLoading />;

  return (
    <Theme>
      <UserIdentification />
      <StatusBar backgroundColor='#FFFFFF' />
    </Theme>
  );
}
