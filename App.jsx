import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider, AuthContext } from './hooks/AuthContext';

import GetStarted     from './pages/GetStarted';
import Login          from './pages/Login';
import Register       from './pages/Register';
import MyNavBar       from './pages/MyNavBar';
import Home           from './pages/home';
import ProductDetails from './pages/ProductDetails';
import Search         from './pages/Search';
import Favorite       from './pages/Favorite';
import Cart           from './pages/Cart';
import Profile        from './pages/Profile';
import Review         from './pages/Review';

const Stack = createNativeStackNavigator();

function AppContent() {
  const { accessToken, loading } = useContext(AuthContext);
  const [fontsLoaded] = useFonts({
    Playfair: require('../Urban_Den_App/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf'),
    Poppins:  require('../Urban_Den_App/assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded || loading) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  //important note the logic behind the code user login / logout,accessToken state changes on login/logout
  //we dont use navigation we just let user use the below stacks depending on the accessToken from JWT
  //each time the user logsout or login we refresh this page using AuthContext to pick his Stack(note: we don't use navigation at all)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {accessToken ? (
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

export default function App() {
  return (
    //from hooks/AuthContext
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}