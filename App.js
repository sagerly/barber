import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, onPress } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
      <Image source={require('./assets/iconScissors.png')}
      style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center'}}/>
      <Text style={styles.homeText}>Scissors and Clippers</Text>
      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    color: 'white',
    fontSize: 35,
    marginBottom: 50,
  },
  logo: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'maroon',
    height: 50,
    width: 100,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    paddingTop: 15,
    fontWeight: 'bold',
  }
});
