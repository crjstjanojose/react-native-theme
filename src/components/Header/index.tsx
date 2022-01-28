import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Props} from './types';

export const Header = ({title, name}: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 30,
  },
  subtitle: {
    color: 'black',
    fontSize: 20,
  },
});
