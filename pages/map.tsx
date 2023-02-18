import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';

import * as data from '../ui/style/map.json';

import NavBar from '../ui/components/navbar';

type MapProps = {
  setPage: Function;
};

export default function Map(props: MapProps) {
    const mapStyle = data.darkStyle;
  
    return (
      <View style={styles.container}>
        <MapView style={styles.map} customMapStyle={mapStyle} showsCompass={false}/>
        <NavBar selected={'map'} setPage={props.setPage}/>
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
    // searchBox: {
    //   height: 55,
    //   width: 55,
    //   top: 45,
    //   right: 15,
    //   position: "absolute",
    //   backgroundColor: "#fff",
    //   zIndex: 2,
    //   borderRadius: 10,
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // }
  });
  