import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedIcon from '../components/AnimatedIcon';
import sendIcon from '../animations/send-icon.json';
import receiveIcon from '../animations/receive-icon.json';
import exchangeIcon from '../animations/exchange-icon.json';

const ExampleScreen = () => {
  return (
    <View style={styles.container}>
      <AnimatedIcon source={sendIcon} />
      <AnimatedIcon source={receiveIcon} />
      <AnimatedIcon source={exchangeIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default ExampleScreen;
