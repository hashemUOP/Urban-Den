import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function StarsReview({ onRatingSelected }) {
  const [selectedRating, setSelectedRating] = useState(0);

  const handlePress = (rating) => {
    setSelectedRating(rating);
    if (onRatingSelected) onRatingSelected(rating);
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <TouchableOpacity key={star} onPress={() => handlePress(star)}>
          <AntDesign
            name={star <= selectedRating ? 'star' : 'staro'}
            size={24}
            color="#ab7e42"
            style={{ marginHorizontal: 2 }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
