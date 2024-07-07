import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import useScrollEffect from "../hooks/useScrollEffect";
import BackgroundGlobal from "../components/BackgroundGlobal";

interface ScreenProps {
  toggleTabBarVisibility: (visible: boolean) => void;
  toggleHeaderVisibility: (visible: boolean) => void;
}

const CalendarTurns: React.FC<ScreenProps> = ({
  toggleTabBarVisibility,
  toggleHeaderVisibility,
}) => {
  const handleScroll = useScrollEffect(
    toggleTabBarVisibility,
    toggleHeaderVisibility
  );

  return (
    <>
      <BackgroundGlobal />
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.container}
      >
        <Text>Calendar Turns Screen</Text>
        {/* More content to make scrolling possible */}
      </ScrollView>
    </>
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

export default CalendarTurns;
