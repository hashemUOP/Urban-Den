// ProductDetails.js
import React from 'react';
import { View, ScrollView, Button, TouchableOpacity } from 'react-native';
import Images from '../components/product_details/Images';
import Desc from '../components/product_details/Desc';
import ProductFooter from '../components/product_details/ProductFooter';
import Accordion from '../components/Accordion';
import CustomText from '../components/customText';
import Colors from '../components/product_details/Colors';

export default function ProductDetails({ route, navigation }) {
  // pull the whole product object out of params
  // this code takes args data from the navigate.navigation() and then transfer it to the navigated compenent
  const { product } = route.params;

  const {
    name,
    img1, img2, img3, img4, img5,
    description,
    category,
    materials,
    specifications,
    price,
    isHot,
    reviews = []
  } = product;

  const intPrice = Math.floor(price);
  const decPrice = (`${price}`).split('.')[1] || '00';

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        style={{ flex: 1 }}
      >
        <Images
          data={[img1, img2, img3, img4, img5].filter(Boolean)}
          navigation={navigation}
        />

        <Colors />

        <Desc
          productTitle={name}
          productCat={category}
          numOfStars={4.5}
          numOfReviews={reviews.length}
          productDetails={description}
        />

        <Accordion title="Materials">
          <CustomText style={{ padding: 12 }}>
            {materials || 'No materials listed.'}
          </CustomText>
        </Accordion>

        <Accordion title="Specifications">
          <CustomText style={{ padding: 12 }}>
            {specifications || 'No specifications available.'}
          </CustomText>
        </Accordion>

        <Accordion title="Reviews">
          {reviews.length > 0 ? (
            reviews.map((r, i) => (
              <CustomText key={i} style={{ padding: 8 }}>
                {r.user}: {r.comment}
              </CustomText>
            ))
          ) : (
            <View>
              <CustomText style={{ padding: 12 }}>
                Be the first to review this product!
              </CustomText> 
              <TouchableOpacity style={{backgroundColor:'#ab7e42',justifyContent:"center",alignItems:"center",width:100,alignSelf:"center",borderRadius:5}}>
                <CustomText style={{color:"white",fontSize:12}}>
                  Comment
                </CustomText>
              </TouchableOpacity>
            </View>
            
          )}
        </Accordion>
      </ScrollView>

      <ProductFooter
        productPriceDec={intPrice}
        productPriceFloat={`.${decPrice}`}
      />
    </View>
  );
}

