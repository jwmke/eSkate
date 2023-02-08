import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import * as data from './ui/style/map.json';

export default function App() {
  const mapStyle = data.darkStyle;

  return (
    <View style={styles.container}>
      <MapView style={styles.map} customMapStyle={mapStyle}/>
      <LinearGradient colors={['#fe4773', '#8f30a1']}
       start={{ x: 1, y: 0 }}
       end={{ x: 0, y: 1 }}
       style={styles.searchBox}>
        <Ionicons name="search" size={35} color="white"/>
      </LinearGradient>
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  searchBox: {
    height: 55,
    width: 55,
    top: 45,
    right: 15,
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
