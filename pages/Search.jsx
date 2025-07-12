// pages/Search.js
import React, { useState } from 'react';
import {View,StyleSheet,Pressable,TextInput,Dimensions} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import ScrollProducts from '../components/home/ScrollProducts';
import CustomText from '../components/customText';

export default function Search({ navigation }) {
  const [text, setText] = useState('');
  const screenWidth = Dimensions.get('window').width;

  return (
    <View>
      <View style={styles.row1}>
        {/* back arrow */}
        <Pressable onPress={() => navigation.goBack()}>
          <View style={[styles.iconContainer, { marginRight: 8 }]}>
            <AntDesign name="left" size={18} color="black" />
          </View>
        </Pressable>

        {/* search bar */}
        <View style={styles.searchForm}>
          <Feather
            name="search"
            size={20}
            color="black"
            style={styles.searchIcon}
          />

          <TextInput
            style={styles.input}
            placeholder="What are you looking for?"
            value={text}
            onChangeText={setText}
            placeholderTextColor="black"
          />

          {/* clear button appears when search bar isnt empty */}
          {text.length > 0 && (
            <View style={styles.closeContainer}>
              <View style={styles.divider} />
              <Pressable onPress={() => setText('')}>
                <EvilIcons name="close" size={24} color="#888" />
              </Pressable>
            </View>
          )}
        </View>
      </View>
      {/* product list */}
      <ScrollProducts navigation={navigation} isForSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  row1: {
    flexDirection: 'row',
    marginTop: 40,
    marginHorizontal: 10,
    alignItems: 'center',
    height: 48,
  },

  iconContainer: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10
  },

  searchForm: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    paddingHorizontal: 8,
    justifyContent:"center",
    marginBottom:10
  },

  searchIcon: {
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 14,
    height: '100%',
  },

  closeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    paddingBottom:5,
    paddingRight:1
  },

  divider: {
    width: 1,
    height: 25,
    backgroundColor: '#ccc',
    marginRight: 3,
    marginTop:4
  },
});
