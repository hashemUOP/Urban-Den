import { View, Text,ScrollView } from 'react-native';
import React from 'react';
import styles from "../../styles/homestyle";
import { FlatList } from 'react-native';
import CustomText from '../customText';


export default function ScrollProducts() {
  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  const renderItem = ({ item }) => (
    <View style={styles.itemBox}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      renderItem={renderItem}
      contentContainerStyle={styles.scrollContainer}
    />
  );
}