import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  View,
  TouchableOpacity,
} from "react-native";
import { Canvas, ImageSVG, useSVG } from "@shopify/react-native-skia";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../contexts/ThemeContext";
import {
  DrawerActions,
  useNavigation,
  NavigationProp,
} from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootStackParamList";

interface HeaderGlobalProps {
  isVisible: boolean;
}

const HeaderGlobal: React.FC<HeaderGlobalProps> = ({ isVisible }) => {
  const svg = useSVG(require("../assets/logoveterinaria.svg"));
  const animatedValue = useRef(new Animated.Value(isVisible ? 1 : 0)).current;
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
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
          outputRange: [-60, 0],
        }),
      },
    ],
  };

  useEffect(() => {
    const isv = isVisible ? 60 : 0;
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
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
      </TouchableOpacity>
      <View style={styles.rightbot}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          style={styles.profileButtonContainer}
        >
          <Ionicons name="cog" size={24} color={theme.container.topTextColor} />
        </TouchableOpacity>
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
    flexDirection: "column",
    alignItems: "flex-start",
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
    marginLeft: 10,
  },
});

export default HeaderGlobal;
