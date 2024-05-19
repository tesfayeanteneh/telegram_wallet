import React, { useRef } from 'react';
import { TouchableOpacity, Animated, StyleSheet } from 'react-native';

const AnimatedButton = ({ onPress, title, style }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      onPress();
    });
  };

  return (
    <Animated.View style={[style, { transform: [{ scale }] }]}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 5,
  },
});

export default AnimatedButton;
