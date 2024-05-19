import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SpendingAnalytics from '../components/SpendingAnalytics';

const SpendingAnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Spending Analytics</Text>
      <SpendingAnalytics />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default SpendingAnalyticsScreen;
