import React, { useState } from 'react';
import { View, TextInput, Pressable, StyleSheet, Dimensions, Alert } from 'react-native';
import CustomText from '../components/customText';
import { ipAddress } from '../components/DynamicIP';


export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [username, setUsername]   = useState(''); 
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = async () => {
    if (password !== repeatPassword) {
      Alert.alert("Passwords don't match");
      return;
    }

    try {
      const response = await fetch('http://'+ipAddress+':8000/api/signup/register/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          username: username,        
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert('Success', 'Account created!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', JSON.stringify(data));
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.containerLogin}>
      <View style={{ marginTop: 30 }}>
        <CustomText style={styles.titleLogin}>Havely</CustomText>
        <CustomText style={styles.moto}>
          Where Comfort Meets Craftsmanship
        </CustomText>
      </View>

      <View style={styles.formColLog}>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <TextInput
            placeholder="first name"
            value={firstName}
            onChangeText={setFirstName}
            style={styles.nameLoggin}
          />
          <TextInput
            placeholder="last name"
            value={lastName}
            onChangeText={setLastName}
            style={[styles.nameLoggin, { marginRight: 50 }]}
          />
        </View>

        <TextInput
          placeholder="username"             
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          style={styles.formLoggin}
        />

        <TextInput
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.formLoggin}
        />

        <TextInput
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.formLoggin}
        />

        <TextInput
          placeholder="repeat password"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry
          style={styles.formLoggin}
        />

        <Pressable style={styles.getLoggedButton} onPress={handleRegister}>
          <CustomText style={styles.getStartedText}>Create account</CustomText>
        </Pressable>

        <View style={styles.registerContainer}>
          <CustomText style={styles.registerPrompt}>
            Already have an account!{' '}
          </CustomText>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <CustomText style={styles.registerLink}>Login now</CustomText>
          </Pressable>
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
