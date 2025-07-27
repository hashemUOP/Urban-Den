import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAddress } from '../components/DynamicIP';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        setAccessToken(token);
      } catch (err) {
        console.error('Failed to load token', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  {/*  login logic here  */}
  const login = async (username, password, navigation) => {
    if (!username || !password) {
      Alert.alert("Missing fields", "Please enter both username and password.");
      return;
    }

    try {
      const resp = await fetch(`http://${ipAddress}:8000/api/token/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!resp.ok) {
        const err = await resp.json();
        throw new Error(err.detail || 'Login failed');
      }

      const data = await resp.json();
      await AsyncStorage.setItem('accessToken', data.access);
      await AsyncStorage.setItem('refreshToken', data.refresh);
      setAccessToken(data.access);

    } catch (e) {
      Alert.alert('Login Failed', e.message);
    }
  };

  {/* logout logic here  */}
  const logout = async () => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
