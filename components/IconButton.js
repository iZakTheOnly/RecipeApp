import { Image, Pressable, StyleSheet, View } from "react-native";

function IconButton({ widthHeight = 50 }) {
  function iconPressHandler() {
    console.log("Icon Pressed");
  }

  return (
    <Pressable style={styles.outerView} onPress={iconPressHandler}>
      <View style={styles.innerView}>
        <Image
          style={[styles.image, { height: widthHeight, width: widthHeight }]}
          source={require("../assets/icon.png")}
        />
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
