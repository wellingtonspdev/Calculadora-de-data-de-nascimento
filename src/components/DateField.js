import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { formatDateInput } from '../logic/ageCalculator';
import { appStyles } from '../styles/appStyles';

export default function DateField({ value, onChangeText, error }) {
  return (
    <View>
      <Text style={appStyles.label}>Data de nascimento</Text>
      <TextInput
        accessibilityLabel="Data de nascimento"
        autoComplete="birthdate-full"
        keyboardType="number-pad"
        maxLength={10}
        onChangeText={(text) => onChangeText(formatDateInput(text))}
        placeholder="DD/MM/AAAA"
        placeholderTextColor="#9CA3AF"
        selectionColor="#8B5CF6"
        style={[appStyles.input, error && appStyles.inputError]}
        value={value}
      />
      {error ? <Text accessibilityRole="alert" style={appStyles.errorText}>{error}</Text> : null}
    </View>
  );
}
