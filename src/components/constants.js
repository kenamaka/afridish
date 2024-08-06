import { StyleSheet } from "react-native";

export const colors = {
  PRIMARY: "#28a745",
  LIGHT: "#fff",
  DARK: "#000",
  GRAY: "#262626",
  SECONDARY: "#F96163",
};

export const container = StyleSheet.create({
  flex: 1,
  paddingVertical: 16,
  paddingHorizontal: 16,
  alignItems: "center",
  justifyContent: "center",
});

export const boxes = StyleSheet.create({
  backgroundColor: "rgba(255,165,0,0.48)",

  alignItems: "center",
  borderRadius: 8,
  width: 100,
  height: 130,
  paddingVertical: 30,
  paddingHorizontal: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 7,
});

export const categories = [
  {
    id: "01",
    category: "Breakfast",
  },
  {
    id: "02",
    category: "Lunch",
  },
  {
    id: "03",
    category: "Dinner",
  },
  {
    id: "04",
    category: "Hausa",
  },
  {
    id: "05",
    category: "Igbo",
  },
  {
    id: "06",
    category: "Yoruba ",
  },
  {
    id: "07",
    category: "Vitamin",
  },
  {
    id: "08",
    category: "Protein",
  },
];

export const recipies = [
  {
    id: "01",
    name: "Pizza Palaty",
    image: require("../../assets/images/food1.png"),
    rating: "4.2",
    ingredients: ["Floor", "Baking Powder", "Red Onion", "Green Pepper"],
    time: "40mins",
    difficulty: "High",
    calories: "420 cal",
    description:
      "An Italian comfort food with layers of pizza, flavored with scotched onions and egg source.",
    steps: [
      "Cook the food according to the package instructions.",
      "Brown thhe ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, bee, ricotta cheese, and tomato sauce in a baking tray.",
      "Repeat the layers and bake in the oven until bubbly and golden",
      "Let it cool slightly before serving",
    ],
    color: "#f39c12",
  },
  {
    id: "02",
    name: "Lasagna",
    image: require("../../assets/images/food2.png"),
    rating: "3.6",
    ingredients: ["Ground Beef", "Carbage", "Red Onion", "Tomatoe"],
    time: "50mins",
    difficulty: "Medium",
    calories: "320 cal",
    description:
      "An Italian comfort food with layers of pizza, flavored with scotched onions and egg source.",
    steps: [
      "Cook the food according to the package instructions.",
      "Brown thhe ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, bee, ricotta cheese, and tomato sauce in a baking tray.",
      "Repeat the layers and bake in the oven until bubbly and golden",
      "Let it cool slightly before serving",
    ],
    color: "#ffc107",
  },
  {
    id: "03",
    name: "Chin Chin",
    image: require("../../assets/images/food3.png"),
    rating: "4.2",
    ingredients: ["Floor", "Baking Powder", "Hot Dog Buns", "Muster"],
    time: "45mins",
    difficulty: "Low",
    calories: "420 cal",
    description:
      "An Italian comfort food with layers of pizza, flavored with scotched onions and egg source.",
    steps: [
      "Cook the food according to the package instructions.",
      "Brown thhe ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, bee, ricotta cheese, and tomato sauce in a baking tray.",
      "Repeat the layers and bake in the oven until bubbly and golden",
      "Let it cool slightly before serving",
    ],
    color: "#f96163",
  },
  {
    id: "04",
    name: "Burger Canny",
    image: require("../../assets/images/food4.png"),
    rating: "3.6",
    ingredients: ["Rice Extract", "Baking Powder", "Salad", "Green Pepper"],
    time: "30mins",
    difficulty: "High",
    calories: "220 cal",
    description:
      "An Italian comfort food with layers of pizza, flavored with scotched onions and egg source.",
    steps: [
      "Cook the food according to the package instructions.",
      "Brown thhe ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, bee, ricotta cheese, and tomato sauce in a baking tray.",
      "Repeat the layers and bake in the oven until bubbly and golden",
      "Let it cool slightly before serving",
    ],
    color: "#fd7e14",
  },
  {
    id: "05",
    name: "Chicken Penco",
    image: require("../../assets/images/food5.png"),
    rating: "4.6",
    ingredients: ["Chicken", "Baking Powder", "White Curry", "Green Pepper"],
    time: "50mins",
    difficulty: "Medium",
    calories: "400 cal",
    description:
      "An Italian comfort food with layers of pizza, flavored with scotched onions and egg source.",
    steps: [
      "Cook the food according to the package instructions.",
      "Brown thhe ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, bee, ricotta cheese, and tomato sauce in a baking tray.",
      "Repeat the layers and bake in the oven until bubbly and golden",
      "Let it cool slightly before serving",
    ],
    color: "#ffc107",
  },
  {
    id: "06",
    name: "Yammy Pouridge",
    image: require("../../assets/images/food6.png"),
    rating: "4.4",
    ingredients: ["Yam Slack", "Palm Oil", "Red Onion", "Green Pepper"],
    time: "60mins",
    difficulty: "Low",
    calories: "420 cal",
    description:
      "An Italian comfort food with layers of pizza, flavored with scotched onions and egg source.",
    steps: [
      "Cook the food according to the package instructions.",
      "Brown thhe ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, bee, ricotta cheese, and tomato sauce in a baking tray.",
      "Repeat the layers and bake in the oven until bubbly and golden",
      "Let it cool slightly before serving",
    ],
    color: "#ffc107",
  },
  {
    id: "07",
    name: "Manchurian",
    image: require("../../assets/images/food7.png"),
    rating: "4.4",
    ingredients: ["Ginea Corn", "White Wheat", "Milk", "Magarine"],
    time: "20mins",
    difficulty: "High",
    calories: "320 cal",
    description:
      "An Italian comfort food with layers of pizza, flavored with scotched onions and egg source.",
    steps: [
      "Cook the food according to the package instructions.",
      "Brown thhe ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, bee, ricotta cheese, and tomato sauce in a baking tray.",
      "Repeat the layers and bake in the oven until bubbly and golden",
      "Let it cool slightly before serving",
    ],
    color: "#007bff",
  },
  {
    id: "08",
    name: "Noddlelicious",
    image: require("../../assets/images/food8.png"),
    rating: "4.2",
    ingredients: [
      "Spagetti Slic",
      "Vegetable Oil",
      "Red Onion",
      "Green Pepper",
    ],
    time: "50mins",
    difficulty: "Low",
    calories: "420 cal",
    description:
      "An Italian comfort food with layers of pizza, flavored with scotched onions and egg source.",
    steps: [
      "Cook the food according to the package instructions.",
      "Brown thhe ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, bee, ricotta cheese, and tomato sauce in a baking tray.",
      "Repeat the layers and bake in the oven until bubbly and golden",
      "Let it cool slightly before serving",
    ],
    color: "#dc3545",
  },
  {
    id: "09",
    name: "Pop Corn",
    image: require("../../assets/images/food9.png"),
    rating: "4.6",
    ingredients: ["White Corn", "Baking Powder", "Milk", "White Source"],
    time: "40mins",
    difficulty: "High",
    calories: "420 cal",
    description:
      "An Italian comfort food with layers of pizza, flavored with scotched onions and egg source.",
    steps: [
      "Cook the food according to the package instructions.",
      "Brown thhe ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, bee, ricotta cheese, and tomato sauce in a baking tray.",
      "Repeat the layers and bake in the oven until bubbly and golden",
      "Let it cool slightly before serving",
    ],
    color: "#343a40",
  },
  {
    id: "010",
    name: "Scotch Pap",
    image: require("../../assets/images/food10.png"),
    rating: "4.5",
    ingredients: ["Floor", "Corn Powder", "Sea Beans", "White Orang"],
    time: "30mins",
    difficulty: "Low",
    calories: "420 cal",
    description:
      "An Italian comfort food with layers of pizza, flavored with scotched onions and egg source.",
    steps: [
      "Cook the food according to the package instructions.",
      "Brown thhe ground beef in a skillet and season with spices.",
      "Layer the lasagna noodles, bee, ricotta cheese, and tomato sauce in a baking tray.",
      "Repeat the layers and bake in the oven until bubbly and golden",
      "Let it cool slightly before serving",
    ],
    color: "#28a745",
  },
];
