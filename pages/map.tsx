import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';

import * as data from '../ui/style/map.json';

import NavBar from '../ui/components/navbar';

type MapProps = {
};

export default function Map(props: MapProps) {
    const mapStyle = data.darkStyle;
  
    return (
      <View style={styles.container}>
        <MapView style={styles.map} 
          customMapStyle={mapStyle} 
          showsCompass={false} 
          initialRegion={{
            latitude: 43.040758,
            longitude: -87.904113,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}/>
        <NavBar selected={'map'}/>
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
  });
  