import 'react-native-gesture-handler';
import {
  Jost_400Regular,
  Jost_600SemiBold,
  Jost_700Bold,
  useFonts,
} from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Theme from './src/styles/theme';
import Routes from './src/routes';
import { SafeView } from './src/styles/pageAreaView';

export default function App() {
  const [fontJost] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
    Jost_700Bold,
  });

  if (!fontJost) return <AppLoading />;

  return (
    <Theme>
      <SafeView>
        <Routes />
      </SafeView>
      <StatusBar backgroundColor='#FFFFFF' />
    </Theme>
  );
}
