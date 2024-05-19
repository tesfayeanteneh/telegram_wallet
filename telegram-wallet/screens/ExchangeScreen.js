import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExchangeScreen = ({ route }) => {
  const { asset } = route.params;

  return (
    <View style={styles.container}>
      <Text>Exchange {asset.name}</Text>
      <Text>Balance: {asset.balance}</Text>
      {/* Implement the exchange functionality here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default ExchangeScreen;
