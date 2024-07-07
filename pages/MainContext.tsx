// MainContent.tsx
import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import BackgroundGlobal from "../components/BackgroundGlobal";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: "transparent",
  },
});

export default MainContent;
