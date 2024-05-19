import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import CarouselItem from '../components/CarouselItem';

const promotions = [
  { id: '1', title: 'New Passcode Feature', image: require('../assets/images/passcode.png') },
  { id: '2', title: 'Wallet Earn Campaign', image: require('../assets/images/earn.png') },
];

const PromotionsScreen = () => {
  return (
    <ScrollView horizontal style={styles.carousel}>
      {promotions.map(promo => (
        <CarouselItem key={promo.id} promotion={promo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carousel: { marginVertical: 20 },
});

export default PromotionsScreen;
