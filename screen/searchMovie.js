import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const searchMovie = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.search}>
        <TextInput
          placeholder="Search Movie"
          textAlign="center"
          style={{
            height: 40,
            margin: 5,
            padding: 10,
            backgroundColor: "white",
          }}
        />
        <view>
          <Button title="Search" />
        </view>
      </View>
    </View>
  );
};

export default searchMovie;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  search: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
});
