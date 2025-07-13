import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export default function Favorite({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  )
}

const screenHeight = Dimensions.get('screen').height
const screeWidth = Dimensions.get('screen').width
const styles = StyleSheet.create(
    {
        container:{
            height:screenHeight,
            width:screeWidth,
            backgroundColor:"white",
        }
    }
);