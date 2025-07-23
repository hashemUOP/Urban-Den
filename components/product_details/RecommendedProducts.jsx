import { View, Text, ScrollView, StyleSheet,Image, Touchable, TouchableOpacity  } from 'react-native';
import React from 'react';
import CustomText from '../customText';

export default function RecommendedProducts() {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.title}>Recommended Products</Text>
      <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >
     <TouchableOpacity onPress={()=>console.log("box pressed")}>
         <View style={styles.productBox}>
            <Image
                source={require("../../assets/images/product_details/SillaChiaraArmsND.png")}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.textOverlay}>
                <CustomText
                numberOfLines={2}
                ellipsizeMode="tail"
                style={styles.overlayText}
                >
                The Calista Arms chair is the perfect combination of style and comfort. With its natural rattan backrest, black plywood seat, and sturdy black polypropylene frame, this chair offers a sleek and contemporary design for any space. The natural rattan backrest adds a touch of warmth and texture, while the black plywood seat provides durability and style.
                </CustomText>
                <CustomText style={{color:"white"}}>$88.00</CustomText>
            </View>
         </View>
    </TouchableOpacity>   
    {/* 2nd product box */}
    <TouchableOpacity onPress={()=>console.log("box pressed")}>
         <View style={styles.productBox}>
            <Image
                source={require("../../assets/images/product_details/Silla_Maruchi_ND-0785-OFFWHITE_01.webp")}
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.textOverlay}>
                <CustomText
                numberOfLines={2}
                ellipsizeMode="tail"
                style={styles.overlayText}
                >
                The Calista Arms chair is the perfect combination of style and comfort. With its natural rattan backrest, black plywood seat, and sturdy black polypropylene frame, this chair offers a sleek and contemporary design for any space. The natural rattan backrest adds a touch of warmth and texture, while the black plywood seat provides durability and style.
                </CustomText>
                <CustomText style={{color:"white"}}>$88.00</CustomText>
            </View>
         </View>
    </TouchableOpacity>   

        <View style={styles.productBox}><Text style={styles.boxText}>Product 2</Text></View>
        <View style={styles.productBox}><Text style={styles.boxText}>Product 3</Text></View>
        <View style={styles.productBox}><Text style={styles.boxText}>Product 4</Text></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    marginBottom: 10,
  },
  scrollContent: {
    paddingHorizontal: 10,
  },
  productBox: {
    width: 250,
    height: 220,
    backgroundColor: '#87ceeb',
    marginRight: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
  },
   productBox: {
    width: 250,
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 8,
    borderRadius: 5,
  },
  overlayText: {
    color: '#fff',    
    fontSize: 12,
    lineHeight: 18,
  },
});
