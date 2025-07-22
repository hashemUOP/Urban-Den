import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Home           from './pages/home';
import ProductDetails from './pages/ProductDetails';
import Search         from './pages/Search';
import GetStarted     from './pages/GetStarted';
import Login          from './pages/Login';
import Register       from './pages/Register';
import Favorite       from './pages/Favorite';
import Cart           from './pages/Cart';
import Profile        from './pages/Profile';
import MyNavBar       from './pages/MyNavBar';
import Review         from './pages/Review';

const Stack = createNativeStackNavigator();

export default function App() {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    Playfair: require('../Urban_Den_App/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
    Poppins:  require('../Urban_Den_App/assets/fonts/Poppins-Regular.ttf'),
  });

  // track auth state
  const [initializing, setInitializing] = useState(true);
  const [user, setUser]                 = useState(null);
  const auth = getAuth();

  useEffect(() => {
    // Subscribe to auth changes
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
      if (initializing) setInitializing(false);
    });
    return unsubscribe;
  }, []);

  // Show splash/loading until fonts & auth state are ready
  if (!fontsLoaded || initializing) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // user signed in: let him start at MyNavBar
          <>
            <Stack.Screen name="MyNavBar"       component={MyNavBar} />
            <Stack.Screen name="Home"           component={Home} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Search"         component={Search} />
            <Stack.Screen name="Favorite"       component={Favorite} />
            <Stack.Screen name="Cart"           component={Cart} />
            <Stack.Screen name="Profile"        component={Profile} />
            <Stack.Screen name="Review"         component={Review} />
          </>
        ) : (
          // user not signed in: let him start at GetStarted
          <>
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Login"      component={Login} />
            <Stack.Screen name="Register"   component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
