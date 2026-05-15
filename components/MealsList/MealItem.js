import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import MealDetails from "../MealDetails";
import { useNavigation } from "@react-navigation/native";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();

  function onPressHandler() {
    navigation.navigate("MealDetails", { mealId: id });
  }

  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#ccc", foreground: true }}
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
  },
  innerContainer: { borderRadius: 8, overflow: "hidden" },
  image: { width: "100%", height: 200 },
  title: { fontWeight: "bold", textAlign: "center", fontSize: 18 },
});
