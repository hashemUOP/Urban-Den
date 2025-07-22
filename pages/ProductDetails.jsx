import React, { useState,useCallback,useEffect } from 'react';
import { View, ScrollView,Alert, TouchableOpacity,SafeAreaView,Modal, Button } from 'react-native';
import Images from '../components/product_details/Images';
import Desc from '../components/product_details/Desc';
import ProductFooter from '../components/product_details/ProductFooter';
import Accordion from '../components/Accordion';
import CustomText from '../components/customText';
import Colors from '../components/product_details/Colors';
import {ipAddress} from '../components/DynamicIP';
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
    product_id,
  } = product;

  const [reviews, setReviews] = useState([]); //default empty array of reviews from models
  const [loading, setLoading] = useState(true); // true until .finally(() => setLoading(false)); in useEffect is false
  const [isReviewSubmitted,isSubmittedUpdate] = useState(false);

  // --- Fetch reviews whenever product_id or isReviewSubmitted changes ---
  const fetchReviews = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://${ipAddress}:8000/api/reviews/?product_id=${product.product_id}`).
      then(res => res.json()).
      then(data => setReviews(data)). //data are the data brought from api and are stored in setReviews
      catch(err => console.error('Failed to fetch products:', err)).
      finally(() => setLoading(false));
    } catch (err) {
      console.error('Failed to fetch reviews:', err);
      Alert.alert('Error fetching reviews', err.message);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews, isReviewSubmitted]);
{/* ******************************************************************************************************* */}

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
        <View style={{marginTop:20}}>
            <Accordion title="Materials" >
            <CustomText style={{ padding: 12 }}>
              {materials || 'No materials listed.'}
            </CustomText>
          </Accordion>

          <Accordion title="Specifications">
            <CustomText style={{ padding: 12 }}>
              {specifications || 'No specifications available.'}
            </CustomText>
          </Accordion>


          <SafeAreaView style={styles.containerModal}>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => navigation.navigate('Review')}
            >
              <CustomText style={styles.openText}>Reviews</CustomText>
            </TouchableOpacity>

          </SafeAreaView>
        </View>
        
        <View style={{marginTop:20}}>
          <CustomText style={{marginLeft:10,fontSize:16}}>Related Products</CustomText>
        </View>
        

      </ScrollView>

      <ProductFooter
        productPriceDec={intPrice}
        productPriceFloat={`.${decPrice}`}
      />
    </View>
  );
}


