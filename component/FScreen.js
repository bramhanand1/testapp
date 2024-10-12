import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const FScreen = ({ navigation }) => {
  useEffect(() => {
    
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./asset/App-icon.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff', 
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default FScreen;
