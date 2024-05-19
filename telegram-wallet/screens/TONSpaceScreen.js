import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const TONSpaceScreen = () => {
  const [isTONSpaceEnabled, setIsTONSpaceEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Text>Enable TON Space</Text>
        <Switch
          value={isTONSpaceEnabled}
          onValueChange={() => setIsTONSpaceEnabled(!isTONSpaceEnabled)}
        />
      </View>
      {isTONSpaceEnabled && (
        <View style={styles.tonSpaceContainer}>
          <Text>TON Space Balance: 1000 TON</Text>
          <Text>TON Space Address: abc123...</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  toggleContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  tonSpaceContainer: { padding: 10, borderWidth: 1 },
});

export default TONSpaceScreen;
