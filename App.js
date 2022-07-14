import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import SecondScreen from "./src/screens/SecondScreen";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const homeScreenFlow = createStackNavigator({
  Search: SearchScreen,
  SecondScreen: SecondScreen,
});
homeScreenFlow.navigationOptions = {
  initialRouteName: "Search",
  title: "Search",
  headerShown: false,
  tabBarIcon: <FontAwesome name="search" size={24} color="white" />,
  tabBarOptions: {
    style: {
      backgroundColor: "#141414",
      borderTopColor: "white",
      borderTopWidth: 0.5,
    },
  },
  tabBarLabel: () => <Text style={{ color: "white" }}>Search</Text>,
};

SearchScreen.navigationOptions = {
  headerShown: false,
};

SecondScreen.navigationOptions = ({ navigation }) => {
  const movies = navigation.getParam("movies");
  return {
    title: `${movies?.Title}`,
    headerShown: true,
    headerTitleStyle: {
      color: "white",
      alignSelf: "flex-end",
    },
    headerStyle: {
      backgroundColor: "#141414",
    },
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          style={{ marginLeft: 20 }}
        />
      </TouchableOpacity>
    ),
  };
};

export default createAppContainer(homeScreenFlow);
