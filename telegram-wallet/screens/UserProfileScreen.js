import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomProfile from '../components/CustomProfile';

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>User Profile</Text>
      <CustomProfile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default UserProfileScreen;
