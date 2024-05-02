import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeAsync = async (key:string,value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('error while storing the token', e);
    }
  };