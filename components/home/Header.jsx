import { View, Text,SafeAreaView,Image, ActivityIndicator, Alert } from 'react-native'
import styles from '../../styles/homestyle';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React,{useState,useEffect,useContext} from 'react'
import CustomText from '../customText';
import {ipAddress} from '../DynamicIP';
import { AuthContext } from '../../hooks/AuthContext'

export default function Header() {

    const { userData, userDataFetch } = useContext(AuthContext);

    useEffect(() => {
        userDataFetch(); // fetch user data with token refresh logic is in AuthContext
    }, []);

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
            <View style={styles.row1}>
                <View style={styles.row2}>
                    <Image
                        source={require('../../assets/images/home/user_profile.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.col1}>
                        <CustomText style={styles.text1}>Hi {userData.first_name}! 👋</CustomText>
                        <CustomText style={styles.text2}>{userData.username}</CustomText>
                    </View>    
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.customButton}>
                        <FontAwesome6 name="bell" size={18} color="#585858" />
                    </View>
                </View>
                
            </View>
            
        </SafeAreaView>
  )
}