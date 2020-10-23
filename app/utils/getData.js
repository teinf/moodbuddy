import AsyncStorage from '@react-native-community/async-storage';

async function getData(key){
    try {
        const newItem = await AsyncStorage.getItem(key);
        return newItem;
    } catch (error) {
        console.log(error)
    }
  };
  
export default getData;