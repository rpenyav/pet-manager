import { ScaledSize, StatusBar, useWindowDimensions } from "react-native";

const useApplicationDimensions = (): ScaledSize => {
  const { width, height, scale, fontScale } = useWindowDimensions();
  return {
    width,
    height: height,
    scale,
    fontScale,
  };
};

export default useApplicationDimensions;
