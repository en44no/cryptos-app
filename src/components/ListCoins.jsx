import React, { useState } from 'react'
import { FlatList, StyleSheet, View, TextInput } from 'react-native'
import Coin from './Coin';

const ListCoins = ({ coins }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <View style={styles.list}>
      <TextInput style={styles.searchInput} placeholder='Search a coin' placeholderTextColor='#434343' onChangeText={text => setSearch(text)} />
      <FlatList
        refreshing={refreshing}
        onRefresh={async () => {
          setRefreshing(true);
          await loadData();
          setRefreshing(false);
        }}
        showsVerticalScrollIndicator={false}
        data={coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase()))}
        renderItem={({ item }) => <Coin coin={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    width: '90%', marginBottom: 10, flex: 1,
  },
  searchInput: {
    color: '#fff', borderBottomColor: '#EA8B19', borderBottomWidth: 1, width: '100%', textAlign: 'center', marginTop: 15, marginBottom: 10, fontSize: 17, paddingBottom: 7
  }
})

export default ListCoins
