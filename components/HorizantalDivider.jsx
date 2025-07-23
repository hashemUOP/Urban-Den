import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function HorizontalDivider({
  width = '90%',
  thickness = 1,
  color = '#ccc',
  marginVertical = 8,
}) {
  return (
    <View
      style={[
        styles.divider,
        {
          width,
          height: thickness,
          backgroundColor: color,
          marginVertical,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'center',
  },
});
