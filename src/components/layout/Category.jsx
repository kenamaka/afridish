import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { categories, colors } from "../constants";

const Category = () => {
  return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: index === 0 ? colors.PRIMARY : colors.LIGHT,
                  marginRight: 36,
                  borderRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 12,

                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.1,
                  shadowRadius: 7,
                  
                }}
                key={index}
              >
                <Text
                  style={{
                    color: index === 0 && colors.LIGHT,
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  {category.category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
    </View>
  );
};

export default Category;
