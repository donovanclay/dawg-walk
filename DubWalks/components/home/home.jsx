import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapComponent from '../Map/map';
import API_KEY from '../../config';
import MapView from "react-native-maps";

const HomePage = () => {
  const handlePress = () => {
    // Handle button press action here
    console.log('Button pressed!');
  };

  return (
    
  <View style={styles.background}>
      {/* <View style={styles.mapContainer}>
        <MapComponent />
      </View> */}
    <View style={styles.container}>
      <Text style={styles.welcomeText}>DubWalks</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    borderRadius: 50,
    backgroundColor: '#FCF6BC',
  },
  contentContainer: {
  },
  welcomeText: {
  },
  image: {
  },
  button: {
  },
  buttonText: {
  },
});

export default HomePage;
