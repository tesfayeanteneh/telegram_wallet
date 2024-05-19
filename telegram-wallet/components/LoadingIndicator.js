import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../animations/loading.json';

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <LottieView source={loadingAnimation} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingIndicator;
