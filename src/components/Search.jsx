import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Search = () => {
  return (
    <TextInput style={styles.searchInput} placeholder='Search a coin' placeholderTextColor='#434343' />
  )
}

const styles = StyleSheet.create({
  searchInput: {
    color: '#fff', borderBottomColor: '#4657CE', borderBottomWidth: 2, width: '40%', textAlign: 'center', marginTop: 60, fontSize: 16,
  }
})

export default Search
