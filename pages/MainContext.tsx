import React, { ReactNode } from "react";
import { View, StyleSheet, Animated } from "react-native";
import BackgroundGlobal from "../components/BackgroundGlobal";
import { useNavigationContext } from "../contexts/NavigationContext";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const { scrollY } = useNavigationContext();

  return (
    <View style={styles.container}>
      <BackgroundGlobal />

      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, { scrollY })
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
});

export default MainContent;
