import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native-elements";

const SecondScreen = ({ navigation }) => {
  const movies = navigation.getParam("movies");
  const id = navigation.getParam("id");

  const [result, setResult] = useState(null);

  const getMovie = async (id) => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&plot=full&apikey=e1a9660c`
    );
    const responseJson = await response.json();
    setResult(responseJson);
  };

  useEffect(() => {
    getMovie(id);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Text h4 style={styles.text}>
          Description
        </Text>
        <Text style={styles.text}> {result?.Plot}</Text>

        <Text h4 style={styles.text}>
          Date of release
        </Text>
        {result?.Released == "N/A" ? (
          <Text style={styles.title}>
            We don't know the date for this movie!
          </Text>
        ) : (
          <Text style={styles.title}>
            The movies was released in {result?.Released}.
          </Text>
        )}

        <Text h4 style={styles.text}>
          Genre
        </Text>
        <Text style={styles.title}>
          The genre of "{movies.Title}" is {result?.Genre}.
        </Text>

        <Text h4 style={styles.text}>
          Runtime
        </Text>
        <Text style={styles.title}>
          Runtime of the movie: {result?.Runtime}.
        </Text>

        <Text h4 style={styles.text}>
          Writer
        </Text>
        {result?.Writer == "N/A" ? (
          <Text style={styles.title}>
            We don't know the writer of this movie!
          </Text>
        ) : (
          <Text style={styles.title}>
            The writer who wrote the movie "{movies.Title}" is {result?.Writer}.
          </Text>
        )}

        <Text h4 style={styles.text}>
          Actors
        </Text>
        <Text style={styles.title}>
          The actors who played in "{movies.Title}" are: {result?.Actors}.
        </Text>

        <Text style={styles.text} h4>
          Language
        </Text>
        <Text style={styles.title}>
          The language of "{movies.Title}" is {result?.Language}.
        </Text>

        <Text h4 style={styles.text}>
          Awards
        </Text>
        {result?.Awards == "N/A" ? (
          <Text style={styles.title}>
            This movie hasn't earned any awards yet!
          </Text>
        ) : (
          <Text style={styles.title}>
            "{movies.Title}" has won those awards: {result?.Awards}.
          </Text>
        )}

        <Text h4 style={styles.text}>
          IMDB Rating
        </Text>
        <Text style={styles.title}>
          The rating of "{movies.Title}" on IMDB is {result?.imdbRating}.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
    textAlign: "justify",
    marginRight: 10,
    marginLeft: 10,
  },
  container: {
    backgroundColor: "#222222",
    flex: 1,
  },
  title: {
    marginTop: 20,
    alignSelf: "flex-start",
    fontWeight: "bold",
    color: "white",
    textAlign: "justify",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
});

export default SecondScreen;
