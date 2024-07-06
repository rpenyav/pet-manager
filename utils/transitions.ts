import { StackCardInterpolationProps } from "@react-navigation/stack";
import { Animated } from "react-native";

// Transición deslizante lateral
export const forSlide = ({
  current,
  next,
  inverted,
  layouts: { screen },
}: StackCardInterpolationProps) => {
  const translateFocused = Animated.multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.width, 0],
      extrapolate: "clamp",
    }),
    inverted
  );

  const translateUnfocused = next
    ? Animated.multiply(
        next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -screen.width],
          extrapolate: "clamp",
        }),
        inverted
      )
    : 0;

  return {
    cardStyle: {
      transform: [
        { translateX: translateFocused },
        { translateX: translateUnfocused },
      ],
    },
  };
};

// Transición de desvanecimiento
export const forFade = ({ current, next }: StackCardInterpolationProps) => {
  const opacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const nextOpacity = next
    ? next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: "clamp",
      })
    : 1;

  return {
    cardStyle: {
      opacity: Animated.multiply(opacity, nextOpacity),
    },
  };
};

// Transición de abajo hacia arriba con desvanecimiento
export const forSlideUpFade = ({
  current,
  next,
  layouts: { screen },
}: StackCardInterpolationProps) => {
  const translateY = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [screen.height, 0],
    extrapolate: "clamp",
  });

  const opacity = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const nextOpacity = next
    ? next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: "clamp",
      })
    : 1;

  return {
    cardStyle: {
      transform: [{ translateY }],
      opacity: Animated.multiply(opacity, nextOpacity),
    },
  };
};
