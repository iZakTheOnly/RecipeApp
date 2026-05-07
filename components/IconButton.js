import { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconButton({ icon, color, altColor, onPress }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function iconPressHandler() {
    let favorite = isFavorite ? false : true;
    console.log("Icon Pressed - Favorite: ", favorite);
    setIsFavorite(favorite);
  }

  let iconColor = isFavorite ? altColor : color;
  return (
    <Pressable style={styles.outerView} onPress={iconPressHandler}>
      <View style={styles.innerView}>
        {/* <Image
          style={[styles.image, { height: widthHeight, width: widthHeight }]}
          source={require("../assets/icon.png")}
        /> */}
        <Ionicons name={icon} size={24} color={iconColor} />
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
