import { View, Text,SafeAreaView,Image } from 'react-native'
import styles from '../../styles/homestyle';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react'
import CustomText from '../customText';

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
                        <CustomText style={styles.text1}>Hi UsersFirstname! 👋</CustomText>
                        <CustomText style={styles.text2}>Full USername Here</CustomText>
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