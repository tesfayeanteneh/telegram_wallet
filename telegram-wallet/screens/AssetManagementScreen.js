import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AssetItem from '../components/AssetItem';

const assets = [
  { id: '1', name: 'Toncoin', balance: '1000 TON' },
  { id: '2', name: 'USDT', balance: '500 USDT' },
  { id: '3', name: 'Bitcoin', balance: '0.5 BTC' },
];

const AssetManagementScreen = ({ navigation }) => {
  const handleSend = (asset) => {
    // Handle send functionality
  };

  const handleReceive = (asset) => {
    // Handle receive functionality
  };

  const handleExchange = (asset) => {
    // Handle exchange functionality
  };

  return (
    <View style={styles.container}>
      <Text>Asset Management</Text>
      <FlatList
        data={assets}
        renderItem={({ item }) => (
          <AssetItem asset={item} onSend={handleSend} onReceive={handleReceive} onExchange={handleExchange} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default AssetManagementScreen;
