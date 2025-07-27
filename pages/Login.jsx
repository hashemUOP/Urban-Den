import React ,{useState,useContext} from 'react';
import { View, TextInput, Pressable, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import CustomText from '../components/customText';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ipAddress } from '../components/DynamicIP';
import { ActivityIndicator,Alert } from 'react-native';
//for old firebase login via email/pass
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig"; 
import { AuthContext } from '../hooks/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    {/* for login logic go to hooks/AuthContext*/}
    setIsLoading(true);
    await login(username, password, navigation);
    setIsLoading(false);
  };

  return (
    <View style={styles.containerLogin}>
      <View style={{marginTop:30}}>
        <CustomText style={styles.titleLogin}>Havely</CustomText>
        <CustomText style={styles.moto}>
            Where Comfort Meets Craftsmanship
        </CustomText>
        </View>  
      <View style={styles.formColLog}>
        <TextInput
          placeholder="username"
          autoCapitalize="none"
          style={styles.formLoggin}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="password"
          secureTextEntry
          style={styles.formLoggin}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={() => console.log('Forgot password')}>
          <CustomText style={styles.forgotText}>Forgot password?</CustomText>
        </Pressable>
        <View style={{gap:10}}>

          {/* disable button until loading finish and show loading circular indicator */}
          <TouchableOpacity style={styles.getLoggedButton} onPress={()=>handleLogin()} disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <CustomText style={styles.getStartedText}>Login</CustomText>
              )}
          </TouchableOpacity>

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
        
      <View style={{marginTop:"auto"}}>
            <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <CustomText style={styles.dividerText}>or continue with</CustomText>
            <View style={styles.line} />
        </View>

        <View style={styles.socialContainer}>
            <Pressable style={styles.socialButton}>
            <FontAwesome6 name="google" size={24} color="black" />
            </Pressable>
            <Pressable style={styles.socialButton}>
            <FontAwesome6 name="apple" size={24} color="black" />
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
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  dividerText: {
    marginHorizontal: 8,
    color: 'black',
    fontWeight: '500',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.9)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
});
