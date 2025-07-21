import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const images = [
  require('../../assets/images/product_details/black-walnut-wood.jpg'),
  require('../../assets/images/product_details/1684779009-cherry_wood_header.jpg'),
  require('../../assets/images/product_details/rust-oleum-varathane-107-946ml-premium-fast-dry-wood-stain-dark-walnut-62920.jpeg'),
  require('../../assets/images/product_details/African-blackwood.webp'),
];

export default function Colors() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <View style={styles.container}>
      {images.map((img, index) => {
        const isSelected = selectedIndex === index;
        return (
          <TouchableOpacity key={index} onPress={() => setSelectedIndex(index)}>
            <View
              style={[
                styles.colorBox,
                {
                  borderColor: isSelected ? '#a38c6eff' : 'transparent',
                  borderWidth: isSelected ? 3 : 1,
                },
              ]}
            >
              <Image source={img} style={styles.image} resizeMode="cover" />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 20,
  },
  colorBox: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
