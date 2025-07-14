import { View, Text, StyleSheet, Dimensions, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomText from '../components/customText'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Cart({navigation}) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.textTitle}>Cart</CustomText>
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

function ListItem({navigation,imageSrc,title,productName,brand}){
  const [quantity,updateQuantity] = useState(1);
  return(
  <View style={{marginBottom:20}}>
    <View style={styles.listItem}>
    <Image source={require('../assets/images/home/SillaChiaraArmsND.png')} style={styles.imageItem}/>
    <CustomText style={{fontSize:12,width:"60%",top:15,left:100}} numberOfLines={2} ellipsizeMode="tail">Deluxe Adjustable Poolside Lounge Chairwith Cushions and UV Protection</CustomText>
    <View style={{left:140,top:25}}>
      <View style={{backgroundColor:"#f0f0f0ff",height:30,width:100,borderRadius:5,flexDirection:'row',justifyContent:"space-between"}}>
        <TouchableOpacity style={styles.minusBox} onPress={()=>{
          quantity === 1?
            updateQuantity(1)
            :
            updateQuantity(quantity-1);
        }}>
            <Entypo name="minus" size={18} color="white" />
        </TouchableOpacity>
        <View style={{backgroundColor:"#f0f0f0ff",height:"100%",width:"25%",borderRadius:10,justifyContent:"center",alignItems:"center"}}>
          <CustomText>{quantity}</CustomText>
        </View>
        <TouchableOpacity style={styles.plusBox} onPress={()=>updateQuantity(quantity+1)}>
          <AntDesign name="plus" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
    <FontAwesome6 name="trash-can" size={20} color="rgba(166, 29, 29, 0.8)" style={{left:"92%",bottom:"55%"}}/>
  </View>
  </View>
     
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
        },
        plusBox:{
          backgroundColor:"black",
          height:"95%",
          width:"30%",
          borderRadius:10,
          justifyContent:"center",
          alignItems:"center"
        },
        minusBox:{
          backgroundColor:"#ab7e42",
          height:"95%",
          width:"30%",
          borderRadius:10,
          justifyContent:"center",
          alignItems:"center"
        }
    }
);