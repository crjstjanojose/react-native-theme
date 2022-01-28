import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <Text style={styles.text}>React Native</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
});
