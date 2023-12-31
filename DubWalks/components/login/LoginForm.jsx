import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.loginForm}>
      <Text>Login</Text>
      <TextInput
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
      <Button title="Login" onPress={ ()=> navigation.navigate('HomePage')} color="#007bff" />
    </View>
  );
};

const styles = {
  loginForm: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    width: 300,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    margin: 10,
    padding: 10,
  },
};

export default LoginForm;