import AsyncStorage from '@react-native-community/async-storage';
async function getAllData(sorted = false){
    const allKeys = await AsyncStorage.getAllKeys();
        var list = []
        for(var i=0; i<allKeys.length; i++) {
            var item = await AsyncStorage.getItem(i);
            if(sorted){
                allKeys.sort();
                var tmp ={mood:{}};
                tmp.mood={
                    "key":i,
                    "value":item
                };
            }
            else {
                var tmp ={mood:{}};
                tmp.mood={
                    "key":i,
                    "value":item
                };
            }
        }
        return JSON.stringify(list);
    }