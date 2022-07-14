import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

const BookMarks = () => {
  return (
    <View style={styles.container}>
      <Text>BookMarks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
  },
  text: {
    fontSize: 15,
  },
});
BookMarks.navigationOptions = {
  headerShown: true,
  headerTitleStyle: {
    alignSelf: "center",
    color: "white",
  },
  headerTitle: "BookMarks",
  headerStyle: {
    backgroundColor: "#141414",
    shadowColor: "white",
  },
};
export default BookMarks;
