import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from '../../styles/homestyle';
import CustomText from '../customText';
const MenuBar = () => {
  const items = ["All","Lamp", "Table", "Chair", "Sofa"];
  const [selectedItem, updateSelectedItem] = useState(0);

  return (
    <View style={styles.menubar}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => updateSelectedItem(index)}
          style={{ marginLeft: index === 0 ? 5 : 0, marginRight: index === 4 ? 5 : 0 }}
        >
          <View style={[
            styles.menu_item,
            {
              backgroundColor: selectedItem === index ? '#ab7e42' : '#ffffff',
            }
          ]}>
            <CustomText style={{ color: selectedItem === index ? 'white' : 'black' }}>
              {item}
            </CustomText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MenuBar;
