import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Images from '../components/product_details/Images';
import Desc from '../components/product_details/Desc';
import ProductFooter from '../components/product_details/ProductFooter';
export default function ProductDetails({navigation}) {
  return (
    <View style={{ flex: 1 }}>
     <ScrollView contentContainerStyle={{ paddingBottom: 80 }} style={{ flex: 1 }}>
          <Images navigation={navigation}/>
          <Desc 
            productTitle={'Deluxe Adjustable Poolside Lounge Chairwith Cushions and UV Protection'}
            productCat={'Seating and Lounge Furniture'}
            numOfStars={4.5}
            numOfReviews={345}
            productDetails={
              `
  The Chiara Rattan Dining Chair with Armrests is a perfect choice for any space. With its charming vintage style, this chair is made of ash wood, it has a rattan seat and back woven.
  Its structure, backrest and armrests are made of robust natural ash wood that combines perfectly with its rattan-finished seat.
              `
            }
          />
          
      </ScrollView>
    <ProductFooter productPriceDec={349} productPriceFloat={'.00'}/>
    </View>
    
  )
}