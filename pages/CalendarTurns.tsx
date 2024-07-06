import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigationContext } from "../contexts/NavigationContext";

const CalendarTurns: React.FC = () => {
  const { scrollY } = useNavigationContext();

  return (
    <View style={styles.container}>
      <Text>Calendar Turns Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default CalendarTurns;
