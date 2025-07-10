import { View, Text,SafeAreaView,Image } from 'react-native'
import styles from '../../styles/homestyle';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react'

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row1}>
                <View style={styles.row2}>
                    <Image
                        source={require('../../assets/images/home/user_profile.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.col1}>
                        <Text style={styles.text1}>Hi UsersFirstname! 👋</Text>
                        <Text style={styles.text2}>Full USername Here</Text>
                    </View>    
                </View>
                <View style={{flexDirection:"row"}}>
                    <View style={styles.customButton}>
                        <MaterialCommunityIcons name="cart-outline" size={18} color="#585858" />
                    </View>
                    <View style={styles.customButton} > 
                        <Entypo name="menu" size={18} color="#585858" />
                    </View>    
                </View>
                
            </View>
            
        </SafeAreaView>
  )
}