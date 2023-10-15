import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import LoadingPage from './components/loading/loading';
import LoginPage from './components/login/LoginPage';
import LoginForm from './components/login/LoginForm';
import HomePage from './components/home/test';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
  const handlePress = () => {
    // Handle button press action here
    console.log('Button pressed!');
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // milliseconds
  }, []);

  let content;

  if (isLoading) {
    content = <LoadingPage />;
  } else {
    if (isLoading) {
      content = <LoadingPage />;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "Login"
            component={LoginPage}
          />
        <Stack.Screen name = "Home Page" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  // Return the prepared content
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
