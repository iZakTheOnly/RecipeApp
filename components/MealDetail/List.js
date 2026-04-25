import { Text, View, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.itemContainer} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#e2b497",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  itemText: {
    color: "black",
    textAlign: "center",
  },
});
