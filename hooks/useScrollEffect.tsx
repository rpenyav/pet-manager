// hooks/useScrollEffect.ts
import { useRef } from "react";
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const useScrollEffect = (
  toggleTabBarVisibility: (visible: boolean) => void
) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const lastScrollY = useRef(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    const diff = currentScrollY - lastScrollY.current;

    if (diff > 10) {
      // Scrolling down
      toggleTabBarVisibility(false);
    } else if (diff < -10) {
      // Scrolling up
      toggleTabBarVisibility(true);
    }

    lastScrollY.current = currentScrollY;
  };

  return { handleScroll, scrollY };
};

export default useScrollEffect;
