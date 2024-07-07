import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightTheme, darkTheme } from "../themes/themes";

interface ThemeContextProps {
  theme: typeof lightTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("selectedTheme");
        if (storedTheme) {
          setTheme(storedTheme === "light" ? lightTheme : darkTheme);
        }
      } catch (error) {
        console.error("Failed to load theme", error);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    try {
      const newTheme = theme === lightTheme ? darkTheme : lightTheme;
      setTheme(newTheme);
      await AsyncStorage.setItem(
        "selectedTheme",
        newTheme === lightTheme ? "light" : "dark"
      );
    } catch (error) {
      console.error("Failed to save theme", error);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
