import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from "../../styles/homestyle";
import CustomText from '../customText';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { ipAddress } from '../DynamicIP';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFetchFavorites } from '../../hooks/useFetchFavorites';
import useDeleteFavorite from '../../hooks/useDeleteFavotite';

export default function ScrollProducts({ navigation, isForSearch, selectedCategory }) {
  const API_URL = 'http://' + ipAddress + ':8000/api/products/?category=' + selectedCategory;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingFav, setFavLoading] = useState(false);
  const [heartReplace, replaceIt] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);


  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err))
      .finally(() => setLoading(false));
  }, [selectedCategory, refreshFlag]);

  const addProductToFav = async (product_id) => {
    let token = await AsyncStorage.getItem('accessToken');
    setFavLoading(true);
    try {
      const response = await fetch(
        "http:" + ipAddress + ":8000/api/favorite/post/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            product: product_id,
          })
        }
      );
    } catch (error) {
      console.log("error occurred: " + error);
    } finally {
      setFavLoading(false);
    }
  };

  const favProducts = useFetchFavorites(refreshFlag);

  const deleteFavorite = useDeleteFavorite();

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, color: "black" }} />;
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
        data={products}
        keyExtractor={item => item.product_id.toString()}
        renderItem={({ item }) => {
          const price = item.price;
          const intPrice = Math.floor(price);
          const decPrice = (`${price}`).split('.')[1] || '00';
          const product = item;
          const img1 = item.img1;
          const isHot = item.is_hot;
          const description = item.description;
          const materials = item.materials;

          const favIds = new Set(favProducts.map(f => f.product));

          return (
            <Pressable onPress={() => navigation.navigate('ProductDetails', { product })}>
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
                    {favIds.has(product.product_id) ? (
                      <TouchableOpacity style={styles.heart}
                        onPress={() => {
                          deleteFavorite(product.product_id);
                          setRefreshFlag(prev => !prev);
                        }}>
                        <AntDesign name="heart" size={19} color="red" style={{ marginTop: 5 }} />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity style={styles.heart} disabled={loadingFav}
                        onPress={() => {
                          addProductToFav(product.product_id);
                          setRefreshFlag(prev => !prev);
                        }}>
                        <EvilIcons name="heart" size={28} color="black" />
                      </TouchableOpacity>
                    )}

                </View>

                <View style={styles.overlayBottom}>
                  <View style={{ flexDirection: "column" }}>
                    <CustomText numberOfLines={2} ellipsizeMode="tail">
                      {description}
                    </CustomText>
                    <View style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}>
                      <CustomText
                        style={{
                          fontSize: 10,
                          flexShrink: 1,
                          marginRight: 8,
                        }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {materials}
                      </CustomText>

                      <View style={{ flexDirection: "row", alignItems: "flex-end", flexShrink: 0 }}>
                        <CustomText style={{ fontWeight: "700", fontSize: 15 }}>
                          ${intPrice}
                        </CustomText>
                        <CustomText style={{ fontSize: 10 }}>
                          .{decPrice}
                        </CustomText>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>
          );
        }}
        contentContainerStyle={styles.scrollContainer}
      />
    </>
  );
}
