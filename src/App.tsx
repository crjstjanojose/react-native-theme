import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {Header} from './components/Header';

const App = () => {
  const [name, setName] = useState<string>('Cristiano Silva');
  const [title, setTitle] = useState<string>('Olá');

  /* */
  useEffect(() => {
    console.log('Mounted Component');
    if (name === 'Cristiano Silva') {
      setTitle('Hello');
    } else {
      setTitle('Olá');
    }
    return () => console.log('Unmounting');
  }, [name]);

  /* */
  const changeName = useCallback(() => {
    if (name === 'Cristiano Silva') {
      console.log(`changeName, ${name}`);
      setName('Cistiano Jose');
    } else {
      setName('Cristiano Silva');
    }
  }, [name]);

  /**/
  const nameChanged = useMemo(() => {
    return `${name} | ${new Date()}`;
  }, [name]);

  /* */
  const fnChangeName = () => {
    setName(old => {
      if (old === 'Cristiano Silva') {
        return 'Cristiano Jose';
      } else {
        return 'Cristiano Silva';
      }
    });
  };

  /* */
  const inputRef = useRef<TextInput>({} as TextInput);

  return (
    <SafeAreaView style={styles.app}>
      <Header name={name} title={title} />
      <Button title="Change Name" onPress={fnChangeName} />
      <Button title="REF" onPress={() => inputRef.current.focus()} />
      <TextInput style={styles.input} ref={inputRef} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 15,
  },
  input: {
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    fontSize: 20,
  },
});
