import { useRef, useEffect } from "react";
import {
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

const useHeaderVisibility = (
  toggleHeaderVisibility: (visible: boolean) => void,
  scrollThreshold: number = 80 // Default threshold value
) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const prevScrollY = useRef(0);
  const isHeaderVisible = useRef(true); // Track the visibility state

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, scrollThreshold],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, scrollThreshold],
    outputRange: [0, -250], // Adjust this value as needed
    extrapolate: "clamp",
  });

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;

    if (currentOffset <= 0) {
      // Always show header when at the very top
      if (!isHeaderVisible.current) {
        Animated.timing(scrollY, {
          toValue: 0,
          duration: 300, // Adjust the duration as needed
          useNativeDriver: true,
        }).start();
        toggleHeaderVisibility(true);
        isHeaderVisible.current = true;
      }
    } else if (currentOffset >= scrollThreshold) {
      if (isHeaderVisible.current) {
        Animated.timing(scrollY, {
          toValue: scrollThreshold,
          duration: 300, // Adjust the duration as needed
          useNativeDriver: true,
        }).start();
        toggleHeaderVisibility(false);
        isHeaderVisible.current = false;
      }
    }
  };

  return { handleScroll, headerOpacity, headerTranslateY };
};

export default useHeaderVisibility;
