import { View, Text, ImageBackground, Button, Pressable, TouchableOpacity } from 'react-native';
import {React,useState} from 'react';
import styles from "../../styles/homestyle";
import CustomText from '../customText';

export default function AdSection() {
  
  return (
    <ImageBackground
      source={require('../../assets/images/home/lampb.jpeg')}
      style={styles.adImage}
      imageStyle={{ borderRadius: 5 }}
    >
      <View style={styles.overlayContent}>
        <CustomText style={{ color: "white", fontWeight: "500" }}>
          New Collection
        </CustomText>
        <CustomText style={{ color: "white", width: 200, fontSize: 9 }}>
          From statement pieces to cozy comfort, we have everything you need to create a home you'll love
        </CustomText>
        <TouchableOpacity style={styles.adButton} onPress={()=>console.log("hashem")} activeOpacity={0.9}>
            <CustomText style={styles.adButtonText}>Shop now</CustomText>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
