import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionItem = ({ transaction }) => {
  return (
    <View style={styles.transactionItem}>
      <Text>{transaction.type}: {transaction.amount}</Text>
      <Text>{transaction.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionItem: { padding: 10, borderBottomWidth: 1, marginBottom: 10 },
});

export default TransactionItem;
