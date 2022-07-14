import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign style={styles.icon} name="search1" size={24} color="black" />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        placeholder="Search for a movie"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 20,
    backgroundColor: "#E2E5DE",
    height: 40,
    borderRadius: 50,
    marginHorizontal: 50,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 15,
  },
  icon: {
    marginHorizontal: 10,
    fontSize: 25,
    alignSelf: "center",
  },
});

export default SearchBar;
