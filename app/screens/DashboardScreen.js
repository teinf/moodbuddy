import React from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
import { ScrollView } from "react-native-gesture-handler";

function DashboardScreen({ navigation }) {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <Image source={require("../assets/buddy.png")} style={styles.piesel} />
      <TouchableOpacity onPress={() => navigation.navigate("Jak się masz?")}>
        <View style={styles.dashboardItem}>
          <View style={styles.dashboardLeft}>
            <Text style={styles.title}>Dodaj wpis</Text>
            <Text>Możesz dodać nowy wpis lub edytować poprzedni</Text>
          </View>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Statystyki")}>
        <View style={styles.dashboardItem}>
        <View style={styles.dashboardLeft}>
            <Text style={styles.title}>Statystyki</Text>
            <Text>Wyświetl swoje statystyki</Text>
          </View>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Kalendarz")}>
        <View style={styles.dashboardItem}>
        <View style={styles.dashboardLeft}>
            <Text style={styles.title}>Kalendarz</Text>
            <Text>Wyświetl informacje o danym miesiącu</Text>
          </View>
          <FontAwesome name="angle-right" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dashboardItem: {
    margin: 15,
    padding: 35,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.light
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  dashboardLeft: {
      marginRight: 35
  },
  piesel: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 20
  }
});

export default DashboardScreen;
