
import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Content from './src/componentes/Content';
import Footer from './src/componentes/Footer';
import Header from './src/componentes/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     
      
      <ScrollView>
      
      
    
      <Header/>
      <Content/>
      <Footer/>


    
    
    </ScrollView> 
      
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



