import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

const NotificationSettings = () => {
  useEffect(() => {
    const registerForPushNotifications = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('No notification permissions!');
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      // Save token to server for push notifications
    };
    registerForPushNotifications();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Enable Notifications</Text>
      <Button title="Enable" onPress={() => { /* Enable notifications */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default NotificationSettings;
