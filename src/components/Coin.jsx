import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Coin = ({ coin }) => {
  return (
    <View style={styles.containerCoin}>
      <View style={styles.leftSide}>
        <Text style={styles.ranking}>{coin.market_cap_rank}</Text>
        <Image style={styles.image}
          source={{ uri: coin.image }}
        />
        <View style={styles.containerNameAndSymbol}>
          <Text style={styles.name}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textCurrentPrice}>${coin.current_price}</Text>
        <Text style={[styles.pricePercentage, coin.price_change_percentage_24h > 0 ? styles.priceUp : styles.priceDown]}>  {coin.price_change_percentage_24h}%</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCoin: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftSide: {
    flexDirection: 'row',
  },
  ranking: {
    color: '#fff', marginRight: 5, marginTop: 6, width: 30
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 999,
    backgroundColor: '#fff',
  },
  containerNameAndSymbol: {
    marginLeft: 10,
  },
  name: {
    color: '#fff'
  },
  textSymbol: {
    color: '#434343', textTransform: 'uppercase'
  },
  pricePercentage: {
    textAlign: 'right',
  },
  textCurrentPrice: {
    color: '#fff', textAlign: 'right',
  },
  priceUp: {
    color: 'green'
  },
  priceDown: {
    color: 'red'
  },
  last24Hours: {
    color: '#434343'
  }
})

export default Coin
