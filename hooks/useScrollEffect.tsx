import { useRef } from "react";
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const useScrollEffect = (
  toggleTabBarVisibility: (visible: boolean) => void,
  toggleHeaderVisibility: (visible: boolean) => void
) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const prevScrollY = useRef(0);
  const isTabBarVisible = useRef(true);
  const isHeaderVisible = useRef(true);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > prevScrollY.current ? "down" : "up";
    prevScrollY.current = currentOffset;

    if (currentOffset <= 0) {
      if (!isHeaderVisible.current) {
        toggleHeaderVisibility(true);
        isHeaderVisible.current = true;
      }
      if (!isTabBarVisible.current) {
        toggleTabBarVisibility(true);
        isTabBarVisible.current = true;
      }
    } else if (currentOffset >= 80) {
      if (direction === "down" && isTabBarVisible.current) {
        toggleTabBarVisibility(false);
        isTabBarVisible.current = false;
      } else if (direction === "up" && !isTabBarVisible.current) {
        toggleTabBarVisibility(true);
        isTabBarVisible.current = true;
      }
      if (direction === "down" && isHeaderVisible.current) {
        toggleHeaderVisibility(false);
        isHeaderVisible.current = false;
      } else if (direction === "up" && !isHeaderVisible.current) {
        toggleHeaderVisibility(true);
        isHeaderVisible.current = true;
      }
    }
  };

  return handleScroll;
};

export default useScrollEffect;
