import { View, Text } from 'react-native'
import React from 'react'
import CustomText from '../customText';
import styles from '../../styles/product_details';
import Stars from './Stars';

export default function Desc({productTitle,productCat,numOfStars,numOfReviews,productDetails}) {
  return (
    <View>
        <View style={styles.titleText}>
            <CustomText style={{fontWeight:"700",fontSize:17}}>{productTitle}</CustomText>
            <CustomText style={{fontWeight:"600",fontSize:11}}>{productCat}</CustomText>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <Stars numOfStars={numOfStars}/>
                <CustomText style={{fontSize:10}}>({numOfReviews} review)</CustomText>
            </View>
            <View style={{gap:-20}}>
                <CustomText style={{fontWeight:"700",marginTop:10,fontSize:17}}>Detail Product</CustomText>
                <CustomText style={{}}>{productDetails}</CustomText>    
            </View>
        </View>
    </View>
  )
}

