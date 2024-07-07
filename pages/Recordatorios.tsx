import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import useScrollEffect from "../hooks/useScrollEffect";
import useHeaderVisibility from "../hooks/useHeaderVisibility";

interface RecordatoriosProps {
  toggleTabBarVisibility: (visible: boolean) => void;
  toggleHeaderVisibility: (visible: boolean) => void;
}

const Recordatorios: React.FC<RecordatoriosProps> = ({
  toggleTabBarVisibility,
  toggleHeaderVisibility,
}) => {
  const { handleScroll: handleTabBarScroll } = useScrollEffect(
    toggleTabBarVisibility
  );
  const { handleScroll: handleHeaderScroll } = useHeaderVisibility(
    toggleHeaderVisibility
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    handleTabBarScroll(event);
    handleHeaderScroll(event);
  };

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
