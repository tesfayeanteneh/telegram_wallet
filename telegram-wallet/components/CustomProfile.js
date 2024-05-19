import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CustomProfile = () => {
  const [avatar, setAvatar] = useState(null);

  const chooseAvatar = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      alert("Permission to access gallery is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled) {
      setAvatar(pickerResult.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Customize your profile</Text>
      <Button title="Choose Avatar" onPress={chooseAvatar} />
      {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
      <Button title="Save" onPress={() => { /* Save avatar */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, margin: 10 },
});

export default CustomProfile;
