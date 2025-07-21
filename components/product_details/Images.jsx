import React from 'react';
import { View, Dimensions, Pressable } from 'react-native';
import { Image } from 'expo-image';
import Swiper from 'react-native-swiper';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from '../../styles/product_details';
import homeStyles from '../../styles/homestyle';
import CustomText from '../customText';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Images({ navigation, data = [] }) {
  // Filter valid image objects with valid image URLs
  const validImages = Array.isArray(data)
    ? data.filter(uri => typeof uri === 'string' && uri.trim() !== '')
    : [];

  return (
    <View style={{ height: screenHeight * 0.5, position: 'relative' }}>
      
      <View style={styles.iconsRow}>
        <Pressable onPress={() => navigation.goBack()}>
          <View style={[styles.iconContainer, { paddingRight: 2 }]}>
            <AntDesign name="left" size={18} color="black" />
          </View>
        </Pressable>

        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.iconContainer, { paddingBottom: 2 }]}>
            <Ionicons name="share-social-outline" size={20} color="black" style={{ paddingRight: 3, paddingTop: 3 }} />
          </View>
          <View style={[styles.iconContainer, { paddingBottom: 2 }]}>
            <EvilIcons name="heart" size={24} color="black" />
          </View>
        </View>
      </View>

      <Swiper
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={10}
        dotStyle={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
        activeDotStyle={{ backgroundColor: '#ab7e42' }}
      >
        {validImages.length > 0 ? (
          validImages.map((uri, index) => (
            <Image
              key={index.toString()}
              source={{ uri }}
              style={{
                width: screenWidth,
                height: screenHeight * 0.5,
              }}
              contentFit="cover"
              transition={500}
            />
          ))
        ) : (
          <View
            style={{
              width: screenWidth,
              height: screenHeight * 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
            }}
          >
            <CustomText>No Images Available</CustomText>
          </View>
        )}
      </Swiper>

      <View style={[homeStyles.badge, { position: 'absolute', bottom: -15, left: 10 }]}>
        <CustomText style={{ fontSize: 11, color: 'white' }}>🔥 Hot Product</CustomText>
      </View>
    </View>
  );
}
