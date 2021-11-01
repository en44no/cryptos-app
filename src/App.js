import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#141414' />
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414', alignItems: 'center', flex: 1,
  },
});