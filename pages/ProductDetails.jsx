import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator, Alert } from 'react-native';
import Images from '../components/product_details/Images';
import Desc from '../components/product_details/Desc';
import ProductFooter from '../components/product_details/ProductFooter';
import Accordion from '../components/Accordion';
import CustomText from '../components/customText';
import Colors from '../components/product_details/Colors';

const API_URL = 'http://192.168.1.101:8000/api/products/';

export default function ProductDetails({ route, navigation }) {
  
  const id = route?.params?.id;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  if (!id) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <CustomText>No product selected.</CustomText>
      </View>
    );
  }

  useEffect(() => {
    fetch(`${API_URL}${id}/`)
      .then(res => {
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return res.json();
      })
      .then(data => setProduct(data))
      .catch(err => {
        console.error(err);
        Alert.alert('Error', 'Failed to load product.');
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  if (!product) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <CustomText>Product not found.</CustomText>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }} style={{ flex: 1 }}>
        <Images
          images={[
            product.img1, product.img2, product.img3,
            product.img4, product.img5
          ].filter(uri => !!uri)}
          navigation={navigation}
        />

        <Colors/>

        <Desc
          productTitle={product.name}
          productCat={product.category}
          numOfStars={product.rating ?? 0}
          numOfReviews={product.review_count ?? 0}
          productDetails={product.description}
        />

        <Accordion title="Materials">
          <CustomText style={{ padding: 12 }}>
            {product.materials || 'No materials listed.'}
          </CustomText>
        </Accordion>

        <Accordion title="Specifications">
          <CustomText style={{ padding: 12 }}>
            {product.specifications || 'No specifications available.'}
          </CustomText>
        </Accordion>

        <Accordion title="Reviews">
          {Array.isArray(product.reviews) && product.reviews.length > 0 ? (
            product.reviews.map((r, i) => (
              <CustomText key={i} style={{ padding: 8 }}>
                {r.user}: {r.comment}
              </CustomText>
            ))
          ) : (
            <CustomText style={{ padding: 12 }}>
              Be the first to review this product!
            </CustomText>
          )}
        </Accordion>

        <CustomText style={{ marginLeft: 12, fontWeight: '700', marginTop: 10 }}>
          Similar products
        </CustomText>
       
      </ScrollView>

      <ProductFooter 
        productPriceDec={Math.floor(product.price)} 
        productPriceFloat={`.${(product.price % 1).toFixed(2).split('.')[1] || '00'}`} 
      />
    </View>
  );
}
