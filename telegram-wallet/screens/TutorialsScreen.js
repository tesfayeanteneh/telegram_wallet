import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CryptoTutorials from '../components/CryptoTutorials';

const TutorialsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Crypto Tutorials</Text>
      <CryptoTutorials />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default TutorialsScreen;
