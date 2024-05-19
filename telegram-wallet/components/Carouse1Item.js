import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CarouselItem = ({ promotion }) => {
  return (
    <View style={styles.promoItem}>
      <Image source={promotion.image} style={styles.promoImage} />
      <Text>{promotion.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  promoItem: { width: 200, marginRight: 10 },
  promoImage: { width: '100%', height: 100 },
});

export default CarouselItem;
