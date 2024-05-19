import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

const tutorials = [
  { id: '1', title: 'What is Cryptocurrency?' },
  { id: '2', title: 'How to Use Your Wallet' },
];

const CryptoTutorials = () => {
  return (
    <View style={styles.container}>
      <Text>Crypto Tutorials</Text>
      <FlatList
        data={tutorials}
        renderItem={({ item }) => (
          <View style={styles.tutorialItem}>
            <Text>{item.title}</Text>
            <Button title="View" onPress={() => { /* Navigate to tutorial */ }} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  tutorialItem: { padding: 10, borderBottomWidth: 1, marginBottom: 10 },
});

export default CryptoTutorials;
