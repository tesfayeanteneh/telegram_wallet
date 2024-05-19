import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AssetItem = ({ asset, onSend, onReceive, onExchange }) => {
  return (
    <View style={styles.assetItem}>
      <Text>{asset.name}: {asset.balance}</Text>
      <View style={styles.assetButtons}>
        <Button title="Send" onPress={() => onSend(asset)} />
        <Button title="Receive" onPress={() => onReceive(asset)} />
        <Button title="Exchange" onPress={() => onExchange(asset)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  assetItem: { padding: 10, borderBottomWidth: 1, marginBottom: 10 },
  assetButtons: { flexDirection: 'row', justifyContent: 'space-around' },
});

export default AssetItem;
