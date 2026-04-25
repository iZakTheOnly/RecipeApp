import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
