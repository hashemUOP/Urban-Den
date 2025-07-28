import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAddress } from '../components/DynamicIP';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

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

  // refresh token function
  const refreshAccessToken = async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    if (!refreshToken) {
      logout(); // no refresh token stored
      return null;
    }

    const response = await fetch(`http://${ipAddress}:8000/api/token/refresh/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
      // token refresh failed, logout the user
      logout();
      return null;
    }

    const data = await response.json();
    await AsyncStorage.setItem('accessToken', data.access);
    setAccessToken(data.access);
    return data.access;
  } catch (error) {
    console.error('Refresh token error:', error);
    logout(); // something went wrong, force logout
    return null;
  }
};
  
  {/* Header.jsx user data fetch logic here  */}
  const userDataFetch = async () => {
  // grabbing token from AsyncStorage
  let token = await AsyncStorage.getItem('accessToken');

  // if token not available try to refresh it
  if (!token) {
    token = await refreshAccessToken();
    if (!token) {
      // refresh failed logout user
      Alert.alert('Session expired', 'Please log in again.');
      logout();
      return;
    }
  }

  // defining a function that takes token as param to fetch user data
  const fetchData = async (tokenToUse) => {
    console.log('📤 Fetching userData with token:', tokenToUse);
    return fetch(`http://${ipAddress}:8000/api/users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenToUse}`,
      },
    });
  };

  // running the fuction with token from Async Storage
  let response = await fetchData(token);

  // if the access token was expired, try refreshing and retry
  if (response.status === 401) {
    const newToken = await refreshAccessToken();
    if (newToken) {
      response = await fetchData(newToken);
    } else {
      Alert.alert('Session expired', 'Please log in again.');
      logout();
      return;
    }
  }

  // any other error
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    console.log('Error Failed to fetch user data');
    return;
  }

  // success update userData with what was fetched
  const data = await response.json();
  setUserData(data);
  return data;
};



  {/*  Login.jsx logic here */} 
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

  {/*  Profile.jsx logout logic here */} 
  const logout = async () => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    setAccessToken(null);
    setUserData(null);
  };




  return (
    <AuthContext.Provider value={{
      accessToken,
      setAccessToken,
      login,
      logout,
      loading,
      userData,
      userDataFetch
    }}>
      {children}
    </AuthContext.Provider>
  );
};
