import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReceiveScreen = ({ route }) => {
  const { asset } = route.params;

  return (
    <View style={styles.container}>
      <Text>Receive {asset.name}</Text>
      <Text>Balance: {asset.balance}</Text>
      {/* Implement the receive functionality here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default ReceiveScreen;
