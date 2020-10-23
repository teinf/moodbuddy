import AsyncStorage from '@react-native-community/async-storage';
async function getData(key){
    try {
        var newItem = {};
        newItem ={"mood": await AsyncStorage.getItem(key)[0]};
        console.log(await AsyncStorage.getItem(key))
        return newItem;
    } catch (error) {
        console.log(error)
    }
  };
export default getData;