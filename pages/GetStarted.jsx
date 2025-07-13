import { View, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import React from 'react';
import ProgressBar from '../components/ProgressBar';
import CustomText from '../components/customText';
import { BlurView } from 'expo-blur';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.containerStarted}>
      <Image
        source={require('../assets/images/get_started/denys-striyeshyn-wJ7yGwz2-00-unsplash (1).jpg')}
        style={styles.image}
      />

      <ProgressBar numOfFinishedStages={1} navigation={navigation}/>

      <CustomText style={styles.title}>Havely</CustomText>
      <CustomText style={styles.titleDesc}>
        At Havely, we believe your home should be a reflection of you – a haven of
        comfort, style, and functionality.
      </CustomText>

      <View style={styles.buttonsContainer}>
        {/* Frosted glass blur behind the button */}
        <View >
          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <CustomText style={styles.loginText}>Login</CustomText>
          </Pressable>
        </View>

        <Pressable
          style={styles.getStartedButton}
          onPress={() => navigation.navigate('GetStarted')}
        >
          <CustomText style={styles.getStartedText}>Get started</CustomText>
        </Pressable>

        <View style={styles.registerContainer}>
          <CustomText style={styles.registerPrompt}>
            Don’t have an account?{' '}
          </CustomText>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <CustomText style={styles.registerLink}>Register now</CustomText>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStarted: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'cover',
  },
  title: {
    position: 'absolute',
    top: screenHeight * 0.15,
    left: 15,
    fontWeight: '700',
    color: 'white',
    fontSize: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  titleDesc: {
    position: 'absolute',
    top: screenHeight * 0.23,
    left: 15,
    fontWeight: '500',
    color: 'white',
    fontSize: 16,
    width: screenWidth * 0.7,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    gap: 12,
  },
  blurButton: {
    borderRadius: 5,
    overflow: 'hidden', 
  },
  loginButton: {
    width: screenWidth * 0.8,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  getStartedButton: {
    width: screenWidth * 0.8,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
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
  },
  registerPrompt: {
    color: 'rgba(255,255,255,0.8)',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  registerLink: {
    color: 'rgba(228, 228, 228, 1)',
    textDecorationLine: 'underline',
  },
});
