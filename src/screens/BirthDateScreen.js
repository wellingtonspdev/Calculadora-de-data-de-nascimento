import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';

import AgeResult from '../components/AgeResult';
import DateField from '../components/DateField';
import { calculateCalendarAge, getAgeGroup, validateBirthDate } from '../logic/ageCalculator';
import { appStyles } from '../styles/appStyles';

export default function BirthDateScreen() {
  const [birthDateText, setBirthDateText] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  function handleCalculate() {
    const validation = validateBirthDate(birthDateText);
    if (!validation.valid) {
      setError(validation.message);
      setResult(null);
      return;
    }

    const age = calculateCalendarAge(validation.date);
    setError('');
    setResult({ ...age, group: getAgeGroup(age.years) });
  }

  function handleBirthDateChange(text) {
    setBirthDateText(text);
    setError('');
    setResult(null);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={appStyles.keyboardContainer}
    >
      <ScrollView
        contentContainerStyle={appStyles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[appStyles.glow, appStyles.glowTop]} />
        <View style={[appStyles.glow, appStyles.glowBottom]} />

        <View style={appStyles.header}>
          <View style={appStyles.headerBadge}>
            <Text style={appStyles.headerBadgeText}>Atividade prática 01</Text>
          </View>
          <Text style={appStyles.title}>Calculadora de idade</Text>
          <Text style={appStyles.subtitle}>Digite a sua data de nascimento para saber sua idade completa.</Text>
        </View>

        <View style={appStyles.formCard}>
          <DateField error={error} onChangeText={handleBirthDateChange} value={birthDateText} />
          <Pressable
            accessibilityRole="button"
            onPress={handleCalculate}
            style={({ pressed }) => [appStyles.button, pressed && appStyles.buttonPressed]}
          >
            <Text style={appStyles.buttonText}>Calcular idade</Text>
          </Pressable>
        </View>

        <AgeResult result={result} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
