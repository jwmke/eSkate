import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function Trip() {
    return (
      <View style={styles.container}>
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