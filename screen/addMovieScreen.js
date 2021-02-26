import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const addMovieScreen = () => {
  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="Movie Name"
        textAlign="center"
        style={{ height: 40, margin: 5, padding: 10, backgroundColor: "white" }}
      />
      <Button title="ADD MOVIES" />
    </View>
  );
};

export default addMovieScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
