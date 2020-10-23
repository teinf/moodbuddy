import AsyncStorage from "@react-native-community/async-storage";
async function getAllData(sorted = false) {
  const allKeys = await AsyncStorage.getAllKeys();

  if(sorted) {
      allKeys.sort();
  }

  var list = {};
  for (var i = 0; i < allKeys.length; i++) {
    var item = JSON.parse(await AsyncStorage.getItem(allKeys[i]));

    var dateJson = {};
    dateJson[allKeys[i]] = item;

    list = {...list, ...dateJson}
  }

  return list
}

export default getAllData;