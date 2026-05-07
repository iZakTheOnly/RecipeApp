import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import { ScrollView } from "react-native";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ navigation, route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" color="white" altColor="orange" />;
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.details}
      />
      <View style={{ alignItems: "center" }}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: { width: "100%", height: 350, resizeMode: "cover" },
  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    margin: 8,
  },
  details: { color: "white", fontSize: 12 },
  listContainer: {
    width: "90%",
  },
});
