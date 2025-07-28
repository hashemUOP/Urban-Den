import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAddress } from '../components/DynamicIP'; 

export const useFetchFavorites = (refreshFlag) => {
  const [favProducts, setFavProducts] = useState([]);

  useEffect(() => {
    const fetchFavProducts = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (!token) {
          console.warn('No token found');
          return;
        }

        const response = await fetch(`http://${ipAddress}:8000/api/favorite/get/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFavProducts(data);
        } else {
          console.error('Fetch failed with status:', response.status);
        }
      } catch (err) {
        console.error('Error fetching favorites:', err);
      }
    };

    fetchFavProducts();
  }, [refreshFlag]);
  //function will return list of user's favProducts
  return favProducts;
};
