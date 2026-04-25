import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";

function MealDetailsScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.details}
      />
      <Subtitle>Ingredients</Subtitle>
      <List data={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List data={selectedMeal.steps} />
    </View>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: "100%", height: 350, resizeMode: "cover" },
  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    margin: 8,
  },
  details: { color: "white", fontSize: 16 },
});
