import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from "../../styles/homestyle";
import CustomText from '../customText';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';



export default function ScrollProducts({ navigation, isForSearch ,selectedCategory}) {

  const API_URL = 'http://192.168.1.101:8000/api/products/?category=' + selectedCategory;
  
  const [products, setProducts] = useState([]); //default empty array of products from models
  const [loading, setLoading] = useState(true); // true until .finally(() => setLoading(false)); in useEffect is false

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err))
      .finally(() => setLoading(false));
  }, [selectedCategory]);{/* re render page each time selectedCategory is changed */}


  const renderItem = ({ item }) => ( //item is the data of each indivisual product
    <ProductCard
      product={item}         
      navigation={navigation}
    />
  );

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <>
      {isForSearch && (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomText style={{ marginLeft: 18, fontWeight: '700', fontSize: 18 }}>
            {products.length} result{products.length !== 1 ? 's' : ''}
          </CustomText>
          <MaterialIcons name="tune" size={24} color="black" style={{ marginRight: 12 }} />
        </View>
      )}

      <FlatList
        data={products} //go to line 14 which fills array of products from GET
        keyExtractor={item => item.product_id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.scrollContainer}
      />
    </>
  );
}

function ProductCard({ product, navigation }) {
  // this code takes args data "product" from the navigate.navigation() and then stores it to the navigated compenent 
  const {img1, name, materials, price, isHot , description  } = product;

  // split price into integer and decimal parts
  const intPrice = Math.floor(price);
  const decPrice = (`${price}`).split('.')[1] || '00';

  return (
    <Pressable onPress={() => navigation.navigate('ProductDetails',{ product})}>
      <View style={styles.card}>
        <Image source={{ uri: img1 }} style={styles.cardImage} />

        <View style={[styles.overlayRow, { top: 8 }]}>
          {isHot && (
            <TouchableOpacity style={styles.badge}>
              <CustomText style={{ fontSize: 11, color: "white" }}>
                🔥 Hot Product
              </CustomText>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.heart}>
            <EvilIcons name="heart" size={28} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.overlayBottom}>
          <View style={{ flexDirection: "column" }}>
            <CustomText numberOfLines={2} ellipsizeMode="tail">
              {description}
            </CustomText>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <CustomText style={{ fontSize: 10 }} numberOfLines={1} ellipsizeMode="tail">
                {materials}
              </CustomText>
              <CustomText style={{ fontWeight: "700", fontSize: 15 }}>
                ${intPrice}
                <CustomText style={{ fontSize: 10 }}>
                  .{decPrice}
                </CustomText>
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
