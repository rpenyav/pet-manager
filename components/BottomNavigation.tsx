import React, { useEffect, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import useApplicationDimensions from "../hooks/useApplicationDimensions";
import { useTheme } from "../contexts/ThemeContext";
import { RootStackParamList } from "../navigation/RootStackParamList";

interface BottomNavigationProps {
  isVisible: boolean;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ isVisible }) => {
  const { width } = useApplicationDimensions();
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isVisible ? 0 : 80, // Ajusta el valor según sea necesario
      duration: 300, // Duración de la animación en milisegundos
      useNativeDriver: true,
    }).start();
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          width,
          backgroundColor: theme.container.navBargroundColor,
          transform: [{ translateY }],
          borderTopColor: theme.container.borderBargroundColor,
        },
      ]}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Clients")}
      >
        <Ionicons
          name="people-outline"
          size={28}
          color={theme.container.navbarIconsColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CasesStudy")}
      >
        <Ionicons
          name="briefcase-outline"
          size={28}
          color={theme.container.navbarIconsColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CalendarTurns")}
      >
        <Ionicons
          name="calendar-outline"
          size={28}
          color={theme.container.navbarIconsColor}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Recordatorios")}
      >
        <Ionicons
          name="notifications-outline"
          size={28}
          color={theme.container.navbarIconsColor}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    borderTopWidth: 1,

    position: "absolute",
    bottom: 0,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
});

export default BottomNavigation;
