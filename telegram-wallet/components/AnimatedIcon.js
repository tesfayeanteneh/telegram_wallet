import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedIcon = ({ source }) => {
  return (
    <View style={styles.container}>
      <LottieView source={source} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
});

export default AnimatedIcon;
