import { View, Image, Dimensions, Pressable,TouchableOpacity } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import styles from '../../styles/product_details';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import homeStyles from '../../styles/homestyle';
import CustomText from '../customText';
import Ionicons from '@expo/vector-icons/Ionicons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Images({navigation}) {
  const data = [
    { id: '1', image: require('../../assets/images/product_details/SillaChiaraArmsND.png') },
    { id: '2', image: require('../../assets/images/product_details/Silla_Chiara_Arms_ND-0646-WALNUT_06_copia.png') },
    { id: '3', image: require('../../assets/images/product_details/Silla_Chiara_Arms_ND-0646-WALNUT_02_copia.png') },
    { id: '4', image: require('../../assets/images/product_details/Silla_Chiara_Arms_ND-0646-WALNUT_03_copia.png') },
    { id: '5', image: require('../../assets/images/product_details/Chiara_arms.png') },
  ];

  return (
    <View style={{ height: screenHeight * 0.5, position: 'relative' }}>
      <View style={styles.iconsRow}>
        <Pressable onPress={()=>navigation.goBack()}>
            <View style={[styles.iconContainer,{paddingRight:2}]}>
            <AntDesign name="left" size={18} color="black" />
            </View>    
        </Pressable>
            <View style={{flexDirection:"row"}}>
              <View style={[styles.iconContainer,{paddingBottom:2}]}>
                  <Ionicons name="share-social-outline" size={20} color="black" style={{paddingRight:3,paddingTop:3}}/>
              </View>
              <View style={[styles.iconContainer,{paddingBottom:2}]}>
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
        {data.map((item) => (
          <Image
            key={item.id}
            source={item.image}
            style={{
              width: screenWidth,
              height: screenHeight * 0.5,
              resizeMode: 'cover',
            }}
          />
        ))}
      </Swiper>
      <View style={[homeStyles.badge,{position:"absolute",bottom:-15,left:10}]}>
        <CustomText style={{ fontSize: 11, color: "white" }}>🔥 Hot Product</CustomText>
      </View>
</View>

  );
}
