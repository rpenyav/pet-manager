import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import useScrollEffect from "../hooks/useScrollEffect";

interface RecordatoriosProps {
  toggleTabBarVisibility: (visible: boolean) => void;
}

const Recordatorios: React.FC<RecordatoriosProps> = ({
  toggleTabBarVisibility,
}) => {
  const { handleScroll } = useScrollEffect(toggleTabBarVisibility);

  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      contentContainerStyle={styles.container}
    >
      <Text>Recordatorios Screen</Text>
      {/* More content to make scrolling possible */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default Recordatorios;
