import React from 'react';
import { Text, View } from 'react-native';

import { appStyles } from '../styles/appStyles';

export default function AgeResult({ result }) {
  if (!result) return null;

  return (
    <View accessibilityLiveRegion="polite" style={appStyles.resultCard}>
      <Text style={appStyles.resultEyebrow}>Resultado calculado</Text>
      <Text style={appStyles.resultTitle}>Sua idade hoje</Text>
      <Text style={appStyles.ageText}>{result.years} anos, {result.months} meses e {result.days} dias</Text>
      <View style={appStyles.badge}>
        <Text style={appStyles.badgeText}>{result.group}</Text>
      </View>
    </View>
  );
}
