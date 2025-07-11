import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Images from '../components/product_details/Images';
import Desc from '../components/product_details/Desc';
export default function ProductDetails({navigation}) {
  return (
    <ScrollView>
        <Images navigation={navigation}/>
        <Desc 
          productTitle={'Deluxe Adjustable Poolside Lounge Chairwith Cushions and UV Protection'}
          productCat={'Seating and Lounge Furniture'}
          numOfStars={4.5}
          numOfReviews={345}
        />
    </ScrollView>
  )
}