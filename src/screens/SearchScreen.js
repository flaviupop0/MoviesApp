import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { Movies } from "./components/apicall";
import SearchBar from "./components/SearchBar";
import OneResult from "./OneResult";
const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [movies, getMovieRequest] = Movies();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#141414" color="#141414" hidden={true} />
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => getMovieRequest(term)}
      />
      <FlatList
        numColumns={2}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={movies}
        keyExtractor={(movies) => movies?.imdbID}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SecondScreen", {
                  movies: item,
                  id: item?.imdbID,
                })
              }
            >
              <OneResult movies={item} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
  },
});

export default withNavigation(SearchScreen);
