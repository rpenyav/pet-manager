import React, { createContext, useContext, useRef } from "react";
import { Animated } from "react-native";

interface NavigationContextProps {
  scrollY: Animated.AnimatedInterpolation<number>;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <NavigationContext.Provider value={{ scrollY }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = (): NavigationContextProps => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigationContext must be used within a NavigationProvider"
    );
  }
  return context;
};
