import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#000",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../assets/images/food5.png")}
        style={{ width: 300, height: 300 }}
      />

      <Text
        style={{
          fontSize: 25,
          fontWeight: "700",
          top: 5,
          color: "#fff",
        }}
      >
        Great Taste, Great Value!!
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("welcome")}
        style={{
          backgroundColor: "#28a745",
          borderRadius: 18,
          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
          top: 100,
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          {" "}
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );sd
};

export default HomeScreen;
