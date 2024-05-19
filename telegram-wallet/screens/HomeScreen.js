import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, NativeModules } from 'react-native';
import AssetItem from '../components/AssetItem';
import NavigationBar from '../components/NavigationBar';
import PromotionsCarousel from '../components/PromotionsCarousel';

const { OverlayService } = NativeModules;

const assets = [
  { id: '1', name: 'Toncoin', balance: '1000 TON' },
  { id: '2', name: 'USDT', balance: '500 USDT' },
  { id: '3', name: 'Bitcoin', balance: '0.5 BTC' },
];

const HomeScreen = ({ navigation }) => {
  const handleSend = (asset) => {
    navigation.navigate('Send', { asset });
  };

  const handleReceive = (asset) => {
    navigation.navigate('Receive', { asset });
  };

  const handleExchange = (asset) => {
    navigation.navigate('Exchange', { asset });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.balance}>Total Balance: $2000</Text>
        <Button title="Profile" onPress={() => navigation.navigate('User Profile')} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Send" onPress={() => {}} />
        <Button title="Receive" onPress={() => {}} />
        <Button title="Exchange" onPress={() => {}} />
      </View>
      <FlatList
        data={assets}
        renderItem={({ item }) => (
          <AssetItem
            asset={item}
            onSend={handleSend}
            onReceive={handleReceive}
            onExchange={handleExchange}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <PromotionsCarousel />
      <Button title="Start Floating Wallet" onPress={() => OverlayService.startService()} />
      <Button title="Stop Floating Wallet" onPress={() => OverlayService.stopService()} />
      <Button title="Test Animations" onPress={() => navigation.navigate('Example')} />
      <NavigationBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between' },
  balance: { fontSize: 20 },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 },
});

export default HomeScreen;
