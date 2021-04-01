import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAuthToken = async (token) => {
  await AsyncStorage.setItem('@user_auth_token', token);
};

export const getAuthToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@user_auth_token');
    return value;
  } catch {
    return undefined;
  }
};

export const removeAuthToken = async () => {
  await AsyncStorage.removeItem('@user_auth_token');
};
