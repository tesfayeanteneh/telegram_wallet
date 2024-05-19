import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between' },
  balance: { fontSize: 20 },
  buttonsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1 },
  chart: { marginVertical: 8, borderRadius: 16 },
});
