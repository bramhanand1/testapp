import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
   
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/; 
    return passwordPattern.test(password);
  };

  const handleLogin = () => {
    
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Use @gmail.com');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Error', 'Use one uppercase letter and one lowercase letter');
      return;
    }

   
    navigation.replace('Stopwatch');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./asset/image.png')} style={styles.image} />
      </View>
      <Text style={styles.title}>Welcome back!</Text>
      
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}  
      />
      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}  
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#007bff',
    fontSize: 14,
  },
});

export default SScreen;
