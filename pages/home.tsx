import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import NavBar from '../ui/components/navbar';
import Trip from './trip';

type HomeProps = {
};

export default function Home(props: HomeProps) {
    const [inTrip, setInTrip] = useState(false);

    return inTrip ? <Trip /> :
      <View style={styles.container}>
        <View style={styles.newTripButtonContainer}>
          <TouchableOpacity onPress={() => setInTrip(true)}>
              <LinearGradient style={styles.gradientButton}
                                colors={['#fe4773', '#8f30a1']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}>
                <Text style={styles.buttonText}>Start New Trip</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <NavBar selected={'home'} />
        <StatusBar style="inverted" />
      </View>;
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#323432'
    },
    newTripButtonContainer: {
      height: 60, 
      width: "100%",
      bottom: 125,
      position: "absolute",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    gradientButton: {
      height: 60, 
      width: 210, 
      borderRadius: 30, 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      fontSize: 18,
      zIndex: 2,
      fontWeight: 'bold',
      color: '#fff',
    }
  });