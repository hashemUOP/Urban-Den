import { View, Text, StyleSheet, Dimensions, TextInput, Pressable } from 'react-native'
import React from 'react'
import CustomText from '../components/customText';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Login() {
  return (
    <View style={styles.containerLogin}>
        <CustomText style={styles.titleLogin}>Havely</CustomText>
        <CustomText style={styles.moto}>
            Where Comfort Meets Craftsmanship
        </CustomText>
        <View style={styles.formColLog}>
            <TextInput
                placeholder='email'
                style={styles.formLoggin}

            />
            <TextInput
                placeholder='password'
                style={styles.formLoggin}
            />    
            <CustomText style={{marginLeft:"auto",marginRight:25}}>Forgot password?</CustomText>
        </View>
        <Pressable
            style={styles.getLoggedButton}
            onPress={() => console.log("logged in")}
        >
            <CustomText style={styles.getStartedText}>Login</CustomText>
        </Pressable>
        <View style={styles.registerContainer}>
          <CustomText style={styles.registerPrompt}>
            Don’t have an account?{' '}
          </CustomText>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <CustomText style={styles.registerLink}>Register now</CustomText>
          </Pressable>
        </View>
        <View>
            <View style={styles.container}>
                <View style={styles.line} />
                    <CustomText style={styles.text}>or continue with</CustomText>
                <View style={styles.line} />
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",gap:20}}>
                <Pressable style={styles.googleButton}>
                    <FontAwesome6 name="google" size={24} color="black" />    
                </Pressable>
                <Pressable style={styles.googleButton}>
                    <FontAwesome6 name="apple" size={24} color="black" />    
                </Pressable>    
            </View>
        </View>
    </View>
  )
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create(
    {
        containerLogin:{
            height:screenHeight,
            width:screenWidth,
            backgroundColor:"white"
        },
        titleLogin:{
            marginTop:100,
            alignSelf:"center",
            fontWeight:"700",
            fontSize:40
        },
        moto:{
            alignSelf:"center"
        },
        formLoggin:{
            backgroundColor:"#f6f6f6",
            paddingLeft:20,
            marginHorizontal:20,
            borderRadius:5,
            height:50
        },
        formColLog:{
            flexDirection:"column",
            gap:25,
            marginTop:"auto"
        },
        getLoggedButton: {
            height: 60,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginHorizontal:20,
            marginTop:40
        },
        getStartedText: {
            color: 'white',
            fontSize: 16,
            fontWeight: '500',
        },
        registerContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:20,
            marginBottom:70
        },
        registerPrompt: {
            color: 'black'
        },
        registerLink: {
            color:"black",
            textDecorationLine: 'underline',
        },
        googleButton:{
            shadowColor: 'rgba(0, 0, 0, 0.9)',   
            shadowOffset: { width: 1, height: 1 }, 
            shadowRadius: 3,                      
            shadowOpacity: 1,                   
            elevation: 5,   
            height:50,
            width:50,
            backgroundColor:"white",
            borderRadius:50,
            alignItems:"center",
            justifyContent:"center",
            alignSelf:"center"
        },
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,        // space above & below divider
        },
        line: {
            flex: 1,
            height: 1,
            backgroundColor: 'black',   // divider color,
            marginHorizontal:20
        },
        text: {
            marginHorizontal: 2,       // space around the text
            color: 'black',              // text color
            fontWeight: '500',
        },
    }
);