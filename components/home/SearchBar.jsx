import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from "../../styles/homestyle"
import CustomText from '../customText';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function searchBar({navigation}) {
  return (
    <View style={styles.searchBar}>
      <SimpleLineIcons name="magnifier" size={18} color="black" style={{marginLeft:"8"}}/>
      <CustomText style={{marginLeft:5,fontSize:12,color:"black"}}>What are you looking for?</CustomText>
      <View style={{flexDirection:"row",marginLeft:"auto",marginRight:7}}>
        <View style={styles.divider} />
        <Pressable>
          <MaterialIcons name="tune" size={24} color="black" />  
        </Pressable>  
      </View>
      
      
    </View>
  )
}