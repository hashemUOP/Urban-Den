import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import CustomText from '../customText';
import styles from '../../styles/product_details';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const screenWidth = Dimensions.get('window').width;

export default function ProductFooter({productPriceDec,productPriceFloat}) {
  return (
    <View style={styles.footerContainer}>
      <View style={{marginLeft:12}}>
        <CustomText style={{fontSize:12}}>Price</CustomText>
        <CustomText style={{fontSize:20,fontWeight:"700",}}>${productPriceDec}<CustomText style={{fontSize:12}}>{productPriceFloat}</CustomText></CustomText>
      </View>
      <View style={{flexDirection:"row",alignItems:"center"}}>
        <Pressable>
          <View style={styles.iconBox}>
            <FontAwesome6 name="bag-shopping" size={20} color="white" />  
          </View>  
        </Pressable>
        <Pressable>
          <View style={styles.buyBox}>
            <CustomText style={{color:'white',fontSize:13}}>Buy now</CustomText>  
          </View>  
        </Pressable>
      </View>
    </View>
  )
}