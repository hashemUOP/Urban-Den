import { View, Pressable } from 'react-native';
import React, { useState } from 'react';
import styles from "../../styles/homestyle";
import CustomText from '../../components/customText';
import Feather from '@expo/vector-icons/Feather';

export default function Footer() {
  const [selectedIndex, setSelectedIndex] = useState(0); 
const items = [
  {
    label: "Home",
    iconName: "home",
    iconLib: Feather,
  },
  {
    label: "Favorite",
    iconName: "heart",
    iconLib: Feather,
  },
  {
    label: "Cart",
    iconName: "shopping-bag",
    iconLib: Feather,
  },
  {
    label: "Profile",
    iconName: "user",
    iconLib: Feather,
  },
];

  return (
    <View style={styles.footerContainer}>
      {items.map((item, index) => {
        const IconComponent = item.iconLib;
        const isSelected = selectedIndex === index;
        const iconColor = isSelected ? "#ab7e42" : "rgba(37, 37, 37, 0.8)";
        const textColor = isSelected ? "#ab7e42" : "rgba(37, 37, 37, 0.8)";

        return (
          <Pressable
            key={index}
            style={styles.footerItem}
            onPress={() => setSelectedIndex(index)}
          >
            <View style={styles.iconCol}>
              <IconComponent name={item.iconName} size={22} color={iconColor} />
              <CustomText style={{ color: textColor }}>{item.label}</CustomText>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}
