import { View, Text , Image, StyleSheet, Dimensions} from 'react-native'
import React from 'react'

export default function GetStarted() {
  return (
    <>
        <Image 
            source={require('../assets/images/get_started/michael-oxendine-GHCVUtBECuY-unsplash (2).jpg')}
            style={styles.image}
        />
    </>
  )
}

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create(
    {
        image:{
            width:screenWidth,
            height:screenHeight,
            objectFit:'cover'
        }
    }
);