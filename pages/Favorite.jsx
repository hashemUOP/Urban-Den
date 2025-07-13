import { View, Text, StyleSheet, Dimensions, FlatList, ScrollView, Image, Pressable } from 'react-native'
import React from 'react'
import CustomText from '../components/customText'
import Stars from '../components/product_details/Stars'
import Feather from '@expo/vector-icons/Feather';

export default function Favorite({navigation}) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.textTitle}>Favorites</CustomText>
      <ScrollView style={{marginTop:25}} contentContainerStyle={{ paddingBottom: 50,paddingTop:10}}>
        <ListItem navigation={navigation}/>
        <ListItem navigation={navigation}/>
        <ListItem navigation={navigation}/>
        <ListItem navigation={navigation}/>
        <ListItem navigation={navigation}/>
        <ListItem navigation={navigation}/>
        <ListItem navigation={navigation}/>
        <ListItem navigation={navigation}/>
      </ScrollView>
    </View>
  )
}

function ListItem({navigation,imageSrc,title,cat,stars}){
  return(
  <Pressable onPress={()=>navigation.navigate('ProductDetails')} style={{marginBottom:20}} >
    <View style={styles.listItem}>
    <Image source={require('../assets/images/home/SillaChiaraArmsND.png')} style={styles.imageItem}/>
    <CustomText style={{fontSize:12,width:"60%",top:15,left:100}} numberOfLines={2} ellipsizeMode="tail">Deluxe Adjustable Poolside Lounge Chairwith Cushions and UV Protection</CustomText>
    <View style={{left:100,top:15}}>
      <Stars numOfStars={4.5}/>  
    </View>
    <CustomText style={{fontSize:11,width:"70%",top:15,left:100}}>Seating and Lounge Furniture</CustomText>
    <Feather name="heart" size={24} color="black" style={{left:"90%",bottom:"60%"}} />
  </View>
  </Pressable>
     
  );
}

const screenHeight = Dimensions.get('screen').height
const screeWidth = Dimensions.get('screen').width
const styles = StyleSheet.create(
    {
        container:{
            height:screenHeight,
            width:screeWidth,
            backgroundColor:"white",
        },
        textTitle:{
          marginTop:40,
          alignSelf:"center",
          fontSize:20
        },
        listItem:{
          width:screeWidth -20,
          backgroundColor:"#f0f0f0ff",
          height:100,
          marginLeft:10,
          borderRadius:5,
          position:"relative"
        },
        imageItem:{
          position:"absolute",
          width:"25%",
          height:"90%", 
          resizeMode:"cover",
          left:10,
          top:4,
          borderRadius:15
        }
    }
);