import { View, Text } from 'react-native'
import React from 'react'
import styles from "../../styles/homestyle"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function searchBar() {
  return (
    <View style={styles.searchBar}>
      <MaterialCommunityIcons name="magnify" size={24} color="#585858" style={{marginLeft:"5"}} />
      <Text style={{marginLeft:5,fontSize:12,color:"#585858"}}>Search for lamps, tables, etc</Text>
    </View>
  )
}