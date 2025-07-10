import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function CustomText({children}) {
  return (
    <Text style={styles.text}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Playfair',
    color: '#222',          //default color
  },
});