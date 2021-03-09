import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Palette } from './src/styles/palette';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ducampo will returns.</Text>
      <StatusBar style="light" backgroundColor={Palette.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
