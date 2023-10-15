import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
<<<<<<< HEAD
import LoadingPage from './components/loading/loading'
import LoginPage from './components/login/LoginPage';
=======
import LoadingPage from './components/loading/loading';
import HomePage from './components/home/home';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
>>>>>>> origin/main

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // milliseconds
  }, []);

  let content;

  if (isLoading) {
    content = <LoadingPage />;
  } else {
<<<<<<< HEAD
    content = <LoginPage />;
=======
    content = <HomePage />;
>>>>>>> origin/main
  }

  // Return the prepared content
  return content;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
