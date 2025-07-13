import { View, Text , Image, StyleSheet, Dimensions} from 'react-native'
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
        }
    }
);