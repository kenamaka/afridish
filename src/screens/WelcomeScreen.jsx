import React from "react";
import { Text, View } from "react-native";
import Header from "../components/layout/Header";
import SearchBar from "../components/layout/SearchBar";
import Category from "../components/layout/Category";
import Recipe from "../components/layout/Recipe";

const WelcomeScreen = () => {
  return (
    <View style={{ top: 60, paddingHorizontal: 16 }}>
      {/* title header */}
      <Header header={"Hi, Amaka"} icon={"bell-o"} />

      {/* search render */}
      <SearchBar
        icon={"search"}
        placeholder={"Search for your favorite Afritea"}
      />

      {/* Category menus */}
      <View>
        <Category />
      </View>

      {/* latest food items */}
      <Text
        style={{ fontSize: 22, fontWeight: "700", top: 20, marginBottom: 20 }}
      >
        Popular Recipes
      </Text>

      <Recipe />
    </View>
  );
};

export default WelcomeScreen;
