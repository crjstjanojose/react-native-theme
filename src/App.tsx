import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from './components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <Header name="Cristiano Silva" title="Olá tudo bem ?" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
