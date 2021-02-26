import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const loginScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="Email"
        style={{ height: 40, margin: 5, padding: 10, backgroundColor: "white" }}
      />
      <TextInput
        placeholder="Password"
        style={{ height: 40, margin: 5, padding: 10, backgroundColor: "white" }}
      />
      <Button title="Submit" onPress={() => navigation.navigate("Tab")} />
    </View>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
