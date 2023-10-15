import React from 'react';
import LoginForm from './LoginForm';
import { TextInput, View, ImageBackground, StyleSheet } from 'react-native';
import backgroundImage from './uw.jpeg';

const LoginPage = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput style={styles.title}>DUBWALK</TextInput>
        <LoginForm />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(244, 244, 244, 0.7)',
    position: 'relative', // Make the container relative
  },
  title: {
    fontSize: 50,
    color: 'purple',
    fontWeight: 'bold',
    position: 'absolute', // Make the title absolute
    top: 80, // Position it at the top
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default LoginPage;
