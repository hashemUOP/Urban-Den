import { View, Text , Image, StyleSheet, Dimensions, Pressable} from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import ProgressBar from '../components/ProgressBar';
import CustomText from '../components/customText';


export default function GetStarted() {
  return (
    <View style={styles.container}>
        <Image 
            source={require('../assets/images/get_started/denys-striyeshyn-wJ7yGwz2-00-unsplash (1).jpg')}
            style={styles.image}
        />
        <ProgressBar numOfFinishedStages={1}/>
        <CustomText style={styles.title}>
            Havely
        </CustomText>
        <CustomText style={styles.titleDesc}>
            At Havely, we believe your home should be reflection of you - A haven of comfort, style, and functionality.
        </CustomText>
        <View style={{bottom:30,left:30,position:"absolute",gap:5}}>
            <Pressable style={styles.loginButton}>
                <CustomText style={{
                    color:"white",
                    fontSize:16
                }}>Login</CustomText>
            </Pressable>
            <Pressable style={{width:screenWidth*0.8,height:60,backgroundColor:"black",justifyContent:"center",alignItems:"center",borderRadius:5}}>
                <CustomText style={{color:"white"}}>Get started</CustomText>
            </Pressable>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                <CustomText style={{
                    textShadowColor: 'rgba(255, 255, 255, 0.2)',
                    textShadowOffset: { width: 1, height: 1 },
                    textShadowRadius: 4,
                }}>
                    Don’t have an account?&nbsp;
                </CustomText>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <CustomText style={{ color: 'rgba(228, 228, 228, 1)'}}>
                    Register now
                    </CustomText>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            position:"relative"
        },
        image:{
            width:screenWidth,
            height:screenHeight,
            resizeMode:'cover'
        },
        title:{
            position:"absolute",
            top:screenHeight*0.15,
            left:15,
            fontWeight:"700",
            color:"white",
            fontSize:40,
            textShadowColor: 'rgba(0, 0, 0, 0.3)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 4,
        },
        titleDesc:{
            position:"absolute",
            top:screenHeight*0.23,
            left:15,
            fontWeight:"500",
            color:"white",
            fontSize:16,
            width:screenWidth*0.7,
            textShadowColor: 'rgba(0, 0, 0, 0.5)',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 4,
        },
        loginButton: {
            width: screenWidth * 0.8,
            height: 60,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor:  'rgba(0,0,0,0.4)',
            paddingVertical: 10,
            paddingHorizontal: 20,
        },
    }
);