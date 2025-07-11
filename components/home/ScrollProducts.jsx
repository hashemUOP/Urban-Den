import { View, Text,ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from "../../styles/homestyle";
import { FlatList,Image } from 'react-native';
import CustomText from '../customText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Octicons from '@expo/vector-icons/Octicons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
export default function ScrollProducts() {
  const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  const renderItem = ({ item }) => (
    <ProductCard 
      imgSrc={require('../../assets/images/home/SillaChiaraArmsND.png')}
      ProductDesc={'Deluxe Adjustable Poolside Lounge Chairwith Cushions and UV Protection'}
      ProductMaterial={'Wood, Sponge, Woven Canvas'}
      ProductPriceDec={'$340'}
      ProductPriceFloat={'.00'}
    />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.scrollContainer}
    />
  );
}

function ProductCard({ imgSrc,ProductDesc,ProductMaterial,ProductPriceDec,ProductPriceFloat }) {
  return (
    <View style={styles.card}>
      <Image source={imgSrc} style={styles.cardImage} />
      
      <View style={[styles.overlayRow, { top: 8 }]}>
        <TouchableOpacity style={styles.badge}>
          <CustomText style={{ fontSize: 11, color: "white" }}>🔥 Hot Product</CustomText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.heart}>
          <EvilIcons name="heart" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <View style={[styles.overlayBottom]}>
        <View style={{flexDirection:"column"}}>
          <CustomText numberOfLines={2} ellipsizeMode="tail">{ProductDesc}</CustomText> 
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <CustomText style={{fontSize:10}} numberOfLines={1} ellipsizeMode="tail">{ProductMaterial}</CustomText> 
            <CustomText style={{fontWeight:"700",fontSize:15}}>{ProductPriceDec}<CustomText style={{fontSize:10}}>{ProductPriceFloat}</CustomText></CustomText> 
          </View> 
        </View>
      </View>
    </View>
  );
}
