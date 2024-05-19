import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const NavigationBar = () => {
  return (
    <View style={styles.navBar}>
      <Button title="Home" onPress={() => {}} />
      <Button title="Transactions" onPress={() => {}} />
      <Button title="Exchange" onPress={() => {}} />
      <Button title="QR Scanner" onPress={() => {}} />
      <Button title="Settings" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1 },
});

export default NavigationBar;
