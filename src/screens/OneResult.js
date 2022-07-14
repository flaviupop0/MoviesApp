import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const OneResult = ({ movies }) => {
  const { Title, Poster } = movies;

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={{ uri: Poster }}>
        <View style={styles.titleContainer}>
          <Text style={styles.name}>{Title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 150,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
    marginHorizontal: 19,
    alignSelf: "center",
  },
  image: {
    height: 250,
    width: 150,
    justifyContent: "flex-end",
  },
  name: {
    fontSize: 12,
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default OneResult;
