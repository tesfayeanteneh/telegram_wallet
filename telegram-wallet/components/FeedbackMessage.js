import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedbackMessage = ({ message, type }) => {
  const backgroundColor = type === 'error' ? '#FF0000' : '#00FF00';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default FeedbackMessage;
