import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';

type NavBarProps = {
    selected: string,
    setPage: Function
};

export default function NavBar(props: NavBarProps) {
    return (
    <View style={styles.background}>
        <TouchableOpacity onPress={props.setPage('home')}>
            <View style={styles.navButton}>
                <Ionicons name="home-outline" size={30} color="white" />
                <Text style={styles.unselectedText}>Home</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.setPage('map')}>
            <View style={styles.navButton}>
                <MaskedView maskElement={<Ionicons name="map-outline" size={30} color="white" />}>
                <LinearGradient style={{width: 30, height: 30}}
                            colors={['#fe4773', '#8f30a1']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}/>
                </MaskedView>
                <MaskedView maskElement={<Text style={styles.selectedText}>Map</Text>}>
                <LinearGradient style={{width: 20, height: 20}}
                            colors={['#fe4773', '#8f30a1']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}/>
                            <Text style={[styles.selectedText, {opacity: 0}]}>Map</Text>
                </MaskedView>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.setPage('profile')}>
            <View style={styles.navButton}>
                <Ionicons name="person-outline" size={30} color="white" />
                <Text style={styles.unselectedText}>Profile</Text>
            </View>
        </TouchableOpacity>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    background: {
        backgroundColor: '#181818',
        zIndex: 5,
        height: 100,
        width: '100%',
        bottom: 0,
        position: "absolute",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    navButton: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 27
    },
    selectedText: {
        fontSize: 10,
    },
    unselectedText: {
        fontSize: 10,
        color: '#fff',
    },
  });
  