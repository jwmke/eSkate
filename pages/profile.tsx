import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import NavBar from '../ui/components/navbar';

type ProfileProps = {
};

export default function Profile(props: ProfileProps) {
    return (
      <View style={styles.container}>
        <NavBar selected={'profile'}/>
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