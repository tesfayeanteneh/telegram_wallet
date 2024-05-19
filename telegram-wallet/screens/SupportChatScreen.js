import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SupportChat from '../components/SupportChat';

const SupportChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Support Chat</Text>
      <SupportChat />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default SupportChatScreen;
