import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import NavBar from '../ui/components/navbar';

type HomeProps = {
};

export default function Home(props: HomeProps) {
    return (
      <View style={styles.container}>
        <NavBar selected={'home'} />
        <StatusBar style="inverted" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#323432'
    },
  });