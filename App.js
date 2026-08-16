import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import BirthDateScreen from './src/screens/BirthDateScreen';
import { appStyles } from './src/styles/appStyles';

export default function App() {
  return (
    <SafeAreaView style={appStyles.safeArea}>
      <StatusBar barStyle="light-content" />
      <BirthDateScreen />
    </SafeAreaView>
  );
}
