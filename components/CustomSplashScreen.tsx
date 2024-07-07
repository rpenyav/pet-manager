// components/CustomSplashScreen.tsx
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import LOTTI_JSON from "../assets/splashanimation.json";
import useApplicationDimensions from "../hooks/useApplicationDimensions";

SplashScreen.preventAutoHideAsync();

type CustomSplashScreenProps = {
  onLoaded: () => void;
};

const CustomSplashScreen: React.FC<CustomSplashScreenProps> = ({
  onLoaded,
}) => {
  const { width, height } = useApplicationDimensions();

  useEffect(() => {
    const prepare = async () => {
      try {
        // Prepara recursos aquí (si es necesario)
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Espera 5 segundos
      } catch (e) {
        console.warn(e);
      } finally {
        onLoaded();
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [onLoaded]);

  return (
    <View style={styles.container}>
      <LottieView
        style={{ width: width, height: 1800 }}
        source={LOTTI_JSON}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green", // Cambia el color de fondo según tus necesidades
  },
});

export default CustomSplashScreen;
