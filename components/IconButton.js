import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, onPress }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Pressable style={styles.outerView} onPress={onPress}>
      <View style={styles.innerView}>
        <Ionicons name={icon} size={24} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  outerView: {},
  innerView: {},
  image: {
    // height: 50,
    // width: 50,
  },
});
