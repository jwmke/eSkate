import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Map from './pages/map';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <View style={styles.container}>
      <Map setPage={() => setPage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
