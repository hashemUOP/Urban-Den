import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Images from '../components/product_details/Images';

export default function ProductDetails({navigation}) {
  return (
    <ScrollView>
        <Images navigation={navigation}/>
    </ScrollView>
  )
}