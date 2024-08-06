import React from "react";
import { FlatList, Image, Pressable, ScrollView, Text, View } from "react-native";
import { colors, recipies } from "../constants";
import {FontAwesome} from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";

const Recipe = () => {

    const navigation = useNavigation()
  return (
    <View style={{ marginTop: 22, marginBottom:500,flexGrow:1 }}>
  
      <FlatList
      
      showsVerticalScrollIndicator={false }
        data={recipies} 
        renderItem={({ item }) => (
          <Pressable
          onPress={() => navigation.navigate("details",{item})}
            style={{
              backgroundColor: colors.LIGHT,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,

              borderRadius: 16,
              marginVertical: 16,
              width:"48%",
              height:220,

              alignItems: "center",

                      
              
            }}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 150, resizeMode: "center" }}
            />
            <Text>{item.name}</Text>
            <View style={{alignItems:"center",flexDirection:"row"}}>
            <Text>{item.time}</Text>
            <Text> | </Text>
            <Text style={{marginRight:4}}>{item.rating}</Text> 
            <FontAwesome name="star" size={16} color={colors.PRIMARY}/>
            </View>   
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
            justifyContent:"space-between"
        }}

      />
    </View>
  );
};

export default Recipe;
