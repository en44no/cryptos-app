import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <Text style={styles.title}>Cryptos</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#fff', marginTop: 50, fontSize: 20
  },
})

export default Header
