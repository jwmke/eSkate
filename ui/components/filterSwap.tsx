import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function FilterSwap() {
    const [communityFilter, setCommunityFilter] = useState(false);

    return (
        <>
        <View style={styles.background}/>
        <View style={styles.swapBackground}/>
        {
            communityFilter === true ? <View style={[styles.selected, {right: 0}]}>
                <LinearGradient style={styles.selectedGradient}
                                    colors={['#fe4773', '#8f30a1']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 0, y: 1 }}>
                    <Text style={styles.text}>Community</Text>
                </LinearGradient>
            </View> : 
            <View style={styles.selected}>
                <LinearGradient style={styles.selectedGradient}
                                    colors={['#fe4773', '#8f30a1']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 0, y: 1 }}>
                    <Text style={styles.text}>Personal</Text>
                </LinearGradient>
            </View>
        }
        {
            communityFilter === true ? <TouchableWithoutFeedback onPress={() => setCommunityFilter(false)}>
                <View style={styles.selected}>
                    <Text style={styles.text}>Personal</Text>
                </View>
            </TouchableWithoutFeedback > : 
            <TouchableWithoutFeedback onPress={() => setCommunityFilter(true)}>
                <View style={[styles.selected, {right: 0}]}>
                    <Text style={styles.text}>Community</Text>
                </View>
            </TouchableWithoutFeedback >
        }
        </>
        
    );
  }
  
  const styles = StyleSheet.create({
    background: {
        backgroundColor: '#181818',
        zIndex: 5,
        height: 30,
        width: '100%',
        bottom: 100,
        position: "absolute",
        flex: 1
    },
    swapBackground: {
        backgroundColor: "#323432",
        bottom: 100,
        height: 60,
        width: '100%',
        zIndex: 6,
        position: "absolute",
        flex: 1,
        borderRadius: 30
    },
    selected: {
        height: 60, 
        width: "50%",
        bottom: 100,
        zIndex: 7,
        position: "absolute",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        zIndex: 8,
        fontWeight: 'bold',
        color: '#fff',
    },
    selectedGradient: {
        height: 60, 
        width: "100%", 
        borderRadius: 30, 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });