import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import {Header} from './components/Header';

const App = () => {
  const [name, setName] = useState<string>('Cristiano Silva');
  const [title] = useState<string>('Olá');

  const changeName = () => {
    setName(old => {
      if (old === 'Cristiano Silva') {
        return 'Cristiano Jose';
      } else {
        return 'Cristiano Silva';
      }
    });
  };

  return (
    <SafeAreaView style={styles.app}>
      <Header name={name} title={title} />
      <Button title="Change Name" onPress={changeName} />
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
