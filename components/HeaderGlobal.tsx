import React from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { Canvas, ImageSVG, useSVG } from "@shopify/react-native-skia";

const HeaderGlobal = ({}) => {
  const svg = useSVG(require("../assets/logotipo.svg"));

  return (
    <Animated.View style={[styles.profileContainer]}>
      <Canvas style={styles.canvas}>
        {svg && <ImageSVG svg={svg} width={50} height={50} />}
      </Canvas>
      <Text style={styles.text}>Astro Predictions</Text>
      <View style={styles.profileButtonContainer}></View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    paddingHorizontal: 20,

    paddingVertical: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Fondo semitransparente
  },
  profileButtonContainer: {
    marginRight: 25,
  },
  imageContainer: {
    flexDirection: "column", // Alinear elementos en fila
    alignItems: "flex-start", // Alinear elementos verticalmente en el centro
    paddingLeft: 10,
    height: 1,
  },
  canvas: {
    width: 50,
    height: 50,
  },
  text: {
    fontFamily: "SF-semibold",
    fontSize: 17,
    color: "rgba(235,235,245,0.6)",
    marginLeft: 10, // Añadir margen para separar el texto del logo
  },
});

export default HeaderGlobal;
