import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import {
  Canvas,
  LinearGradient,
  Paint,
  Path,
  Rect,
  Skia,
  vec,
} from "@shopify/react-native-skia";
import useApplicationDimensions from "../hooks/useApplicationDimensions";
import { useTheme } from "../contexts/ThemeContext";

type BackgroundGlobalProps = {
  style?: ViewStyle;
};

const BackgroundGlobal: React.FC<BackgroundGlobalProps> = ({ style }) => {
  const { theme } = useTheme();
  const { width, height } = useApplicationDimensions();

  const restoColors = theme.restoColors.map((color) => Skia.Color(color)); // Usa los colores del tema

  const triangleColors = theme.triangleColors.map((color) => Skia.Color(color)); // Usa los colores del tema
  const trianglePath = Skia.Path.Make();
  trianglePath.moveTo(0, 0); // Punto superior izquierdo
  trianglePath.lineTo(width + 40, 0); // Punto superior derecho
  trianglePath.lineTo(0, height); // Punto inferior izquierdo
  trianglePath.close(); // Cierra el path del triángulo

  const start = { x: 0, y: 0 };
  const end = { x: 0, y: height };

  return (
    <View style={[styles.container, style]}>
      <Canvas style={styles.canvas}>
        <Rect x={0} y={-10} width={width} height={2000}>
          <LinearGradient start={start} end={end} colors={restoColors} />
        </Rect>
        <Path path={trianglePath}>
          <Paint>
            <LinearGradient
              start={vec(0, -10)}
              end={vec(width, 1000)}
              colors={triangleColors}
            />
          </Paint>
        </Path>
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -10,
    left: 0,
    right: 0,
    bottom: 0,
  },
  canvas: {
    width: "100%",
    height: "100%",
  },
});

export default BackgroundGlobal;
