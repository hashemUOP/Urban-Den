import React, { useContext,useEffect } from 'react';
import {SafeAreaView,View,Text,Image,StyleSheet,Pressable,Alert,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomText from '../components/customText';
import HorizontalDivider from '../components/HorizantalDivider';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AuthContext } from '../hooks/AuthContext';

export default function Profile({navigation}) {

  const { logout, userData, userDataFetch } = useContext(AuthContext);
  
  // user data fetch logic in AuthContext 
  useEffect(() => {
    userDataFetch(); 
  }, []);
  
  // user logout logic in AuthContext 
  const handleLogout = async () => {
    try {
      await logout(); // this will trigger App.jsx (go re read the hooks/AuthContext file) to render guest stack
      console.log('user logged out successfully.');

    } catch (err) {
      console.error('Error during logout:', err);
      Alert.alert('Logout Failed', 'Please try again.');
    }
  };

  //without this null error will be triggered
  if (!userData) {
      return (
          <SafeAreaView style={styles.container}>
              <ActivityIndicator size="large" color="#ab7e42" />
          </SafeAreaView>
      );
  } 

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/home/user_profile.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.username}>{userData.username}</Text>
      <CustomText style={styles.email}>{userData.email}</CustomText>
      <Pressable style={styles.editButton}>
        <CustomText style={styles.editButtonText}>Edit profile</CustomText>
      </Pressable>

      <View style={styles.section}>
        <CustomText style={styles.sectionTitle}>General</CustomText>
        <View style={styles.optionsContainer}>

          <Pressable>
            <View style={styles.optionRow}>
              <View style={styles.iconTextRow}>
                <View style={styles.iconBackground}>
                  <FontAwesome6 name="bug" size={24} color="black" />
                </View>
                <CustomText style={styles.optionText}>Report a bug</CustomText>
              </View>
              <AntDesign name="arrowright" size={24} color="rgba(0,0,0,0.8)" />
            </View>
          </Pressable>
          <HorizontalDivider color="#888" thickness={0.5} marginVertical={12} />

          <Pressable>
            <View style={styles.optionRow}>
              <View style={styles.iconTextRow}>
                <View style={styles.iconBackground}>
                  <FontAwesome name="globe" size={24} color="black" />
                </View>
                <CustomText style={styles.optionText}>Change Language</CustomText>
              </View>
              <AntDesign name="arrowright" size={24} color="rgba(0,0,0,0.8)" />
            </View>
          </Pressable>
          <HorizontalDivider color="#888" thickness={0.5} marginVertical={12} />

          <Pressable onPress={handleLogout}>
            <View style={styles.optionRow}>
              <View style={styles.iconTextRow}>
                <View style={[styles.iconBackground, styles.logoutIconBg]}>
                  <MaterialIcons name="logout" size={24} color="#b46b6c" />
                </View>
                <CustomText style={[styles.optionText, styles.logoutText]}>Log Out</CustomText>
              </View>
            </View>
          </Pressable>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 50,
  },
  username: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  email: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  editButton: {
    width: 120,
    height: 40,
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
  },
  section: {
    marginTop: 25,
    flex: 1,
  },
  sectionTitle: {
    marginLeft: 25,
    marginBottom: 10,
    fontWeight: '500',
  },
  optionsContainer: {
    backgroundColor: '#f7f7f7',
    marginHorizontal: 15,
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 1,
    paddingVertical: 10,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBackground: {
    backgroundColor: 'white',
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 20,
    color: 'black',
  },
  logoutIconBg: {
    backgroundColor: '#ffeeef',
  },
  logoutText: {
    color: '#b46b6c',
  },
});
