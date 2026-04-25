import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>;
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 24,
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});
