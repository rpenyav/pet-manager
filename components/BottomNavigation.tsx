import React from "react";
import { View, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import useApplicationDimensions from "../hooks/useApplicationDimensions";
import { useTheme } from "../contexts/ThemeContext";
import { RootStackParamList } from "../navigation/RootStackParamList";

interface BottomNavigationProps {
  translateY: Animated.AnimatedInterpolation<number>;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ translateY }) => {
  const { width } = useApplicationDimensions();
  const { theme } = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Animated.View
      style={[
        styles.container,
        {
          width,
          backgroundColor: theme.container.navBargroundColor,
          transform: [{ translateY }],
        },
      ]}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Clients")}
      >
        <Ionicons name="people-outline" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CasesStudy")}
      >
        <Ionicons name="briefcase-outline" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CalendarTurns")}
      >
        <Ionicons name="calendar-outline" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Recordatorios")}
      >
        <Ionicons name="notifications-outline" size={28} color="black" />
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
    borderTopColor: "#dddddd",
    position: "absolute",
    bottom: 0,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
});

export default BottomNavigation;
