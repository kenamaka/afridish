import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { boxes, colors } from "../components/constants";
import {
  FontAwesome,
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }} key={item.index}>
      <View style={{ top: 60, paddingHorizontal: 16, flexDirection: "row" }}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome
            name="arrow-circle-left"
            size={28}
            color={colors.LIGHT}
          />
        </Pressable>
        <Pressable>
          <FontAwesome name="heart-o" size={28} color={colors.LIGHT} />
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: colors.LIGHT,
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
        }}
      >
        <View
          style={{
            // backgroundColor: colors.SECONDARY,
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
          
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        {/* recipe name */}
        <Text
          style={{
            marginTop: 160,
            fontSize: 28,
            fontWeight: "bold",
            bottom: 20,
          }}
        >
          {item.name}
        </Text>

        {/* recipe description */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginVertical: 16, marginHorizontal: 20,marginBottom: 53, }}>
            <Text style={{ fontSize: 20 }}>{item.description}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 30,
              }}
            >
              <View style={boxes}>
                <Ionicons name="time" size={30} color={colors.PRIMARY} />
                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {item.time}
                </Text>
              </View>

              <View style={boxes}>
                <MaterialIcons
                  name="landscape"
                  size={30}
                  color={colors.PRIMARY}
                />

                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {item.difficulty}
                </Text>
              </View>

              <View style={boxes}>
                <FontAwesome5
                  name="capsules"
                  size={30}
                  color={colors.PRIMARY}
                />

                <Text style={{ fontSize: 20, fontWeight: "500" }}>
                  {item.calories}
                </Text>
              </View>
              {/* recipe ingredients */}
            </View>

            <View
              style={{
                alignSelf: "flex-start",
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "600" }}>
                Ingredients:
              </Text>

              {item.ingredients.map((ingredient, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      top: 10,
                      marginVertical: 4,
                      
                    }}
                  >
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: colors.PRIMARY,
                      }}
                    key={index}

                    ></View>
                    <Text style={{ fontSize: 18, marginLeft: 6 }}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
            </View>
          {/* cookin steps */}

          <View>
            <Text style={{fontSize:22, fontWeight:"600"}}>Steps:</Text>
            <View>
              {item.steps.map((step,index) => {
                return ( 
                <View>
                  <Text key={index} style={{fontSize:18,marginVertical:6}}>{`${index+1}. ${step}`}</Text>
                  
                  </View>
                )
              })}
            </View>
          </View>

          </View>
         
        </ScrollView>
      </View>

      {/* recipe extra details */}
    </View>
  );
};

export default DetailScreen;
