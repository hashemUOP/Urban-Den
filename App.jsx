import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './pages/home';
//this component is the enterance to the app and it is ran inthe index.js
export default function App() {
  const [fontsLoaded] = useFonts({
    Playfair: require('../Urban_Den_App/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Home />; // this components renders home page
}


