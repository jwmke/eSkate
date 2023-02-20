import { StyleSheet, View } from 'react-native';
import Map from './pages/map';
import Home from './pages/home';
import Profile from './pages/profile'; 
import { createContext, useState } from 'react';

export const PageContext = createContext(null);

export default function App() {
  const [page, setPage] = useState('home');

  const togglePage = (p:string) => {
    setPage(p);
  }

  return (
    <PageContext.Provider value={{ togglePage } as any}>
      <View style={styles.container}>
        {page === 'home' ? <Home/> 
        : page === 'map' ? <Map/> 
        : <Profile/>}  
      </View>
    </PageContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
