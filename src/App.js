import React, { useEffect, useState } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Header from './components/Header';
import ListCoins from './components/ListCoins';

export default function App() {
  const [coins, setCoins] = useState([]);

  const loadData = async () => {
    const cryptosResponse = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const cryptos = await cryptosResponse.json();
    setCoins(cryptos);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#141414' />
      <Header />
      <ListCoins coins={coins} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414', alignItems: 'center', flex: 1,
  },
});