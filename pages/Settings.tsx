import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { darkTheme } from "../themes/themes";

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.container.backgroundColor },
      ]}
    >
      <Text style={[styles.text, { color: theme.text.color }]}>Dark Mode</Text>
      <Switch value={theme === darkTheme} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default Settings;
