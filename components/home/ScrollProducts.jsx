import { View, Text,ScrollView } from 'react-native';
import React from 'react';
import styles from "../../styles/homestyle";
export default function ScrollProducts() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {Array.from({ length: 20 }, (_, i) => (
        <View key={i} style={styles.box}>
          <Text style={styles.text}>Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  )
}