// hooks/useDeleteFavorite.js
import { ipAddress } from '../components/DynamicIP';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useDeleteFavorite = () => {
  const deleteFavoriteProduct = async (productId) => {

    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (!token) {
        console.warn('No token found');
        return false;
      }

      const response = await fetch(
        `http://${ipAddress}:8000/api/favorite/delete/?product_id=${productId}`,
        {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ product: productId }),
        }
      );

      if (response.ok) {
        console.log("product removed from favorites successfully");
        return true;
      } 
    } catch (error) {
      console.error("error deleting favorite:", error);
      return false;
    }
  };

  return deleteFavoriteProduct;
};

export default useDeleteFavorite;
