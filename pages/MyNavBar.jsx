import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Favorite from './Favorite';
import Cart from './Cart';
import Profile from './Profile';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function MyNavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Favorite') iconName = 'heart';
          else if (route.name === 'Cart') iconName = 'shopping-bag';
          else if (route.name === 'Profile') iconName = 'user';
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ab7e42',
        tabBarInactiveTintColor: '#333',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
