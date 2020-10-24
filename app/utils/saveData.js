import AsyncStorage from '@react-native-community/async-storage';
async function saveData(key,value){
    try {
      await AsyncStorage.setItem(
        key,
        JSON.stringify(value)
      );
    } catch (error) {
        console.log(error)
    }
  };
export default saveData;