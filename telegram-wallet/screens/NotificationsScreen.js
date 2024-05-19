import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotificationSettings from '../components/NotificationSettings';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Notifications</Text>
      <NotificationSettings />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default NotificationsScreen;