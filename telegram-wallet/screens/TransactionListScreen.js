import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import TransactionItem from '../components/TransactionItem';

const transactions = [
  { id: '1', type: 'Sent', amount: '100 TON', date: '2024-05-01' },
  { id: '2', type: 'Received', amount: '50 USDT', date: '2024-05-02' },
  { id: '3', type: 'Exchanged', amount: '0.1 BTC', date: '2024-05-03' },
];

const TransactionListScreen = () => {
  const [filter, setFilter] = useState('All');

  const filteredTransactions = filter === 'All' ? transactions : transactions.filter(tx => tx.type === filter);

  return (
    <View style={styles.container}>
      <View style={styles.filters}>
        <Button title="All" onPress={() => setFilter('All')} />
        <Button title="Sent" onPress={() => setFilter('Sent')} />
        <Button title="Received" onPress={() => setFilter('Received')} />
        <Button title="Exchanged" onPress={() => setFilter('Exchanged')} />
      </View>
      <FlatList
        data={filteredTransactions}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  filters: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
});

export default TransactionListScreen;
