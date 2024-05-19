import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SendScreen = ({ route }) => {
  const { asset } = route.params;

  return (
    <View style={styles.container}>
      <Text>Send {asset.name}</Text>
      <Text>Balance: {asset.balance}</Text>
      {/* Implement the send functionality here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default SendScreen;
