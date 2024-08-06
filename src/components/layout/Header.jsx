import React from "react";
import { Text, View } from "react-native";
import { Ionicons,FontAwesome } from "@expo/vector-icons";

const Header = ({ header, icon }) => {
  return (
    <View style={{flexDirection:"row",alignItems:"center"}}>
      <Text style={{flex:1,fontSize:22,fontWeight:"700"}}>{header}</Text>
      <FontAwesome name={icon} size={25} color="#28a745" />
    </View>
  );
};

export default Header;
