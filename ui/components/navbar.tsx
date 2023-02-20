import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';

import { PageContext } from '../../App';

type NavBarProps = {
    selected: string,
};

export default function NavBar(props: NavBarProps) {
    const { togglePage } : any = useContext(
        PageContext
    );

    return (
    <View style={styles.background}>
        <TouchableOpacity onPress={() => togglePage('home')}>
            {props.selected === 'home' ? <View style={styles.navButton}>
                <MaskedView maskElement={<Ionicons name="home-outline" size={30} color="white" />}>
                    <LinearGradient style={{width: 30, height: 30}}
                                colors={['#fe4773', '#8f30a1']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}/>
                    </MaskedView>
                    <MaskedView maskElement={<Text style={styles.selectedText}>Home</Text>}>
                    <LinearGradient style={{width: 27, height: 20}}
                                colors={['#fe4773', '#8f30a1']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}/>
                                <Text style={[styles.selectedText, {opacity: 0}]}>Home</Text>
                </MaskedView>
            </View> : <View style={styles.navButton}>
                <Ionicons name="home-outline" size={30} color="white" />
                <Text style={styles.unselectedText}>Home</Text>
            </View>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => togglePage('map')}>
            {props.selected === 'map' ? <View style={styles.navButton}>
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
            </View> : <View style={styles.navButton}>
                <Ionicons name="map-outline" size={30} color="white" />
                <Text style={styles.unselectedText}>Map</Text>
            </View>}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => togglePage('profile')}>
            {props.selected === 'profile' ? <View style={styles.navButton}>
                <MaskedView maskElement={<Ionicons name="person-outline" size={30} color="white" />}>
                    <LinearGradient style={{width: 30, height: 30}}
                                colors={['#fe4773', '#8f30a1']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}/>
                    </MaskedView>
                    <MaskedView maskElement={<Text style={styles.selectedText}>Profile</Text>}>
                    <LinearGradient style={{width: 29, height: 20}}
                                colors={['#fe4773', '#8f30a1']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}/>
                                <Text style={[styles.selectedText, {opacity: 0}]}>Profile</Text>
                </MaskedView>
            </View> : <View style={styles.navButton}>
                <Ionicons name="person-outline" size={30} color="white" />
                <Text style={styles.unselectedText}>Profile</Text>
            </View>}
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
        paddingTop: 3
    },
    unselectedText: {
        fontSize: 10,
        color: '#fff',
    },
  });
  