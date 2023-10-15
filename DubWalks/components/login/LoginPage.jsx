import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { Text, TextInput, View, ImageBackground, StyleSheet, Button } from 'react-native';
import backgroundImage from './uw.jpeg';

const LoginPage = ( {navigation} ) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput style={styles.title}>DUBWALK</TextInput>
        <View style = {{
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    width: 300,
    alignItems: 'center',}}>
      <Text>Login</Text>
        <TextInput style 
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <Button title="Login" onPress={ ()=> navigation.navigate('Home Page')} color="#007bff" />
        </View>
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
  input: {
    width: '100%',
    margin: 10,
    padding: 10,
  },
});

export default LoginPage;
