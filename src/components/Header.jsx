import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from './Search'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Cryptos</Text>
      <Search />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginBottom: 20
  },
  title: {
    color: '#fff', marginTop: 60, fontSize: 20
  },
})

export default Header
