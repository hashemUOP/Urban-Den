import React from 'react';
import { View, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native';
import CustomText from '../components/customText';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Register({ navigation }) {
  return (
    <View style={styles.containerLogin}>
      <View style={{marginTop:30}}>
        <CustomText style={styles.titleLogin}>Havely</CustomText>
        <CustomText style={styles.moto}>
            Where Comfort Meets Craftsmanship
        </CustomText>
        </View>  
      <View style={styles.formColLog}>
        <View style={{flexDirection:"row",gap:20,}}>
            <TextInput
            placeholder="first name"
            keyboardType="email-address"
            autoCapitalize="none"
            style={[styles.nameLoggin,]}
            />
            <TextInput
              placeholder="last name"
              keyboardType="email-address"
              autoCapitalize="none"
              style={[styles.nameLoggin,{marginRight:50,paddingLeft:20}]}
            />
        </View>
        <TextInput
          placeholder="email"
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.formLoggin}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          style={styles.formLoggin}
        />
        <TextInput
          placeholder="repeat password"
          secureTextEntry
          style={styles.formLoggin}
        />
        <View style={{gap:10}}>
            <Pressable
              style={styles.getLoggedButton}
              onPress={() => console.log('logged in')}
            >
            <CustomText style={styles.getStartedText}>Create account</CustomText>
          </Pressable>
      <View style={styles.registerContainer}>
        <CustomText style={styles.registerPrompt}>
          Already have an account!{' '}
        </CustomText>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <CustomText style={styles.registerLink}>Login now</CustomText>
        </Pressable>
        </View>
      
      </View>
      </View>      
    </View>
  );
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  titleLogin: {
    fontWeight: '700',
    fontSize: 40,
    alignSelf: 'center',
    marginTop:50
  },
  moto: {
    alignSelf: 'center',
    marginTop: 8,
  },
  formColLog: {
    width: '100%',
    gap: 25,
    marginTop:50
  },
  formLoggin: {
    backgroundColor: '#f6f6f6',
    paddingLeft: 20,
    borderRadius: 5,
    height: 50,
  },
  nameLoggin:{
    backgroundColor: '#f6f6f6',
    borderRadius: 5,
    height: 50,
    width:150,
    paddingLeft:20
  },
  forgotText: {
    color: 'black',
    alignSelf: 'flex-end',
    marginRight: 10,
    fontSize: 14,
  },
  getLoggedButton: {
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
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
    marginTop: 10,
  },
  registerPrompt: {
    color: 'black',
    fontSize: 14,
  },
  registerLink: {
    color: 'black',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
