import React from "react";
import { View, Flatlist } from "react-native";

const MovieList = ({ movies }) => {
  return (
    <View>
      <Flatlist
        horizontal={true}
        showHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(movie) => movie.title}
        renderItem={{ item }}
      />
    </View>
  );
};
export default MovieList;
