import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import addMovieScreen from "../screen/addMovieScreen";
import searchMovie from "../screen/searchMovie";
import loginScreen from "../screen/loginScreen";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

// const AddMovies = createStackNavigator({
//   Add: {
//     screen: addMovieScreen,
//   },
// });

// const SearchMovies = createStackNavigator({
//   Search: {
//     screen: addMovieScreen,
//   },
// });

const TabMovie = createBottomTabNavigator({
  AddMovie: {
    screen: addMovieScreen,
    navigationOptions: {
      tabBarIcon: ({ tabInfo, focused }) => {
        return <Ionicons name={focused ? "home" : "home-outline"} size={25} />;
      },
    },
  },
  SearchMovie: {
    screen: searchMovie,
    navigationOptions: {
      tabBarIcon: ({ tabInfo, focused }) => {
        return (
          <Ionicons name={focused ? "search" : "search-outline"} size={25} />
        );
      },
    },
  },
});

const StackMovies = createStackNavigator({
  Login: {
    screen: loginScreen,
  },
  Tab: {
    screen: TabMovie,
  },
});

export default createAppContainer(StackMovies);
