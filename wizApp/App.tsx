import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/presentation/screens/HomeScreen';
import LoginScreen from './src/presentation/screens/LoginScreen';

const App = () => {
  return (
    <SafeAreaView>
      <LoginScreen />
      <HomeScreen />
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.subtitle}>WizApp</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 43,
    fontWeight: 'bold',
    color: '#A00B0B',
  },
  subtitle: {
    fontSize: 33,
    fontWeight: '700',
    marginTop: 10,
    color: '#14AAE5 ',
  },
});

export default App;
