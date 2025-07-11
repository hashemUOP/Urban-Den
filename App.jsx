import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{/* importing screens to navigate */}
import Home from './pages/home';
import ProductDetails from './pages/ProductDetails';

const Stack = createNativeStackNavigator();
//this component is the entrance to the app and it is run in index.js
export default function App() {
  const [fontsLoaded] = useFonts({
    Playfair: require('../Urban_Den_App/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
    Poppins: require('../Urban_Den_App/assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        {/* defining screens here to be navigated */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
