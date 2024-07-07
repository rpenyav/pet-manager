import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, Animated, View } from "react-native";
import { Canvas, ImageSVG, useSVG } from "@shopify/react-native-skia";
import { Ionicons } from "@expo/vector-icons"; // Importa los iconos de expo
import { useTheme } from "../contexts/ThemeContext";

interface HeaderGlobalProps {
  isVisible: boolean;
}

const HeaderGlobal: React.FC<HeaderGlobalProps> = ({ isVisible }) => {
  const svg = useSVG(require("../assets/logoveterinaria.svg"));
  const animatedValue = useRef(new Animated.Value(isVisible ? 1 : 0)).current;
  const { theme } = useTheme();
  const [tehISV, setTehISV] = useState(60);

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: isVisible ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  const animatedStyle = {
    opacity: animatedValue,
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-60, 0], // Adjust the value as needed
        }),
      },
    ],
  };

  useEffect(() => {
    const isv = isVisible ? 60 : 0; // Set heights for visible and hidden states
    setTehISV(isv);
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        styles.profileContainer,
        animatedStyle,
        {
          height: tehISV,
          backgroundColor: theme.container.topBargroundColor,
        },
      ]}
    >
      <View style={styles.lefttbot}>
        <Canvas style={styles.canvas}>
          {svg && (
            <ImageSVG
              svg={svg}
              width={40}
              height={40}
              color={theme.container.svgcolorlogo}
            />
          )}
        </Canvas>
        <Text style={[styles.text, { color: theme.container.topTextColor }]}>
          Pet Manager
        </Text>
      </View>
      <View style={styles.rightbot}>
        <View style={styles.profileButtonContainer}>
          <Ionicons name="cog" size={24} color={theme.container.topTextColor} />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  rightbot: {
    flexDirection: "row",
    alignItems: "center",
  },
  lefttbot: { flexDirection: "row", alignItems: "center" },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  profileButtonContainer: {
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: "column", // Alinear elementos en fila
    alignItems: "flex-start", // Alinear elementos verticalmente en el centro
    paddingLeft: 10,
    height: 1,
  },
  canvas: {
    width: 50,
    marginTop: 20,
    height: 60,
  },
  text: {
    fontFamily: "SF-semibold",
    fontSize: 17,
    marginLeft: 10, // Añadir margen para separar el texto del logo
  },
});

export default HeaderGlobal;
