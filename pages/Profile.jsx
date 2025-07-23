import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import CustomText from '../components/customText';
import HorizontalDivider from '../components/HorizantalDivider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Profile() {
  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
      <Image source={require("../assets/images/home/user_profile.jpg")} style={styles.avatar}/>
      <Text style={styles.username} >Username</Text>
      <CustomText style={styles.email}>useremail@gmail.com</CustomText>
      <TouchableOpacity style={styles.editButton}>
        <CustomText style={{color:"white"}}>Edit profile</CustomText>
      </TouchableOpacity>
      <View style={{marginTop:25}}>
        <CustomText style={{marginLeft:25}}>General</CustomText>
        <View style={{backgroundColor:"#f7f7f7ff",minHeight:210,marginHorizontal:15,borderRadius:15,borderColor:"grey",borderWidth:1}}>
          <Pressable >
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginLeft:20,marginTop:20}}>
                <View style={{backgroundColor:"white",width:35,height:35,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                  <FontAwesome6 name="bug" size={24} color="black" />
                </View>
                <CustomText style={{marginLeft:20,color:"black"}}>Report a bug</CustomText>
              </View>
            <AntDesign name="arrowright" size={24} color="rgba(0,0,0,0.8)" style={{alignSelf:"center",marginRight:20,marginTop:10}} />
            </View>
            <HorizontalDivider color="#888" thickness={0.5} marginVertical={12} />
          </Pressable>

          <Pressable >
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginLeft:20,marginTop:10}}>
                <View style={{backgroundColor:"white",width:35,height:35,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                  <FontAwesome name="globe" size={24} color="black" />
                </View>
                <CustomText style={{marginLeft:20,color:"black"}}>Change Language</CustomText>
              </View>
            <AntDesign name="arrowright" size={24} color="rgba(0,0,0,0.8)" style={{alignSelf:"center",marginRight:20,marginTop:10}} />
            </View>
            <HorizontalDivider color="#888" thickness={0.5} marginVertical={12} />
          </Pressable>

          <Pressable >
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
              <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginLeft:20,marginTop:10}}>
                <View style={{backgroundColor:"#ffeeef",width:35,height:35,borderRadius:10,justifyContent:"center",alignItems:"center"}}>
                  <MaterialIcons name="logout" size={24} color="#b46b6c"/>
                </View>
                <CustomText style={{marginLeft:20,color:"#b46b6c"}}>LogOut</CustomText>
              </View>
            </View>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    avatar:{
      width:100,
      height:100,
      alignSelf:"center",
      borderRadius:55,
      marginTop:50
    },
    username:{
      marginTop:10,
      alignSelf:"center",
      fontSize:20,
      fontWeight:"600"
    },
    email:{
      alignSelf:"center"
    },
    editButton:{
      width:120,
      height:40,
      backgroundColor:"black",
      alignSelf:"center",
      marginTop:20,
      borderRadius:25,
      justifyContent:"center",
      alignItems:"center"
  }
});