import React from 'react';
import { Text, StyleSheet } from 'react-native';

//style param passes style , ...props passes attributes of component like numberOfLines={2} or ellipsizeMode="tail"
export default function CustomText({ children, style, ...props }) {
  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins',
    color: '#222',
  },
});
