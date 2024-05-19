import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PasscodeSetupScreen = () => {
  const [passcode, setPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');

  const handleSetup = () => {
    if (passcode === confirmPasscode) {
      // Save passcode securely
      alert('Passcode set successfully!');
    } else {
      alert('Passcodes do not match!');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Set up your passcode</Text>
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Enter passcode"
        value={passcode}
        onChangeText={setPasscode}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Confirm passcode"
        value={confirmPasscode}
        onChangeText={setConfirmPasscode}
      />
      <Button title="Set Passcode" onPress={handleSetup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, padding: 10, margin: 10, width: '80%' },
});

export default PasscodeSetupScreen;
