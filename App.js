import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import BirthDateScreen from './src/screens/BirthDateScreen';
import { appStyles } from './src/styles/appStyles';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={appStyles.safeArea}>
        <StatusBar barStyle="light-content" />
        <BirthDateScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
