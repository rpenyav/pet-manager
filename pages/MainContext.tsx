import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import BackgroundGlobal from "../components/BackgroundGlobal";
import BottomNavigation from "../components/BottomNavigation";
// import HeaderGlobal from "../components/HeaderGlobal";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <BackgroundGlobal />
      {/* <HeaderGlobal setShowProfile={setShowProfile} /> */}
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: "transparent", // Asegura que el contenido sea transparente
  },
});

export default MainContent;
