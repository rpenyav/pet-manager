import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import useScrollEffect from "../hooks/useScrollEffect";
import BackgroundGlobal from "../components/BackgroundGlobal";
import { useTheme } from "../contexts/ThemeContext";

interface ScreenProps {
  toggleTabBarVisibility: (visible: boolean) => void;
  toggleHeaderVisibility: (visible: boolean) => void;
}

const Clients: React.FC<ScreenProps> = ({
  toggleTabBarVisibility,
  toggleHeaderVisibility,
}) => {
  const handleScroll = useScrollEffect(
    toggleTabBarVisibility,
    toggleHeaderVisibility
  );

  const { theme } = useTheme();
  return (
    <>
      <BackgroundGlobal />
      <ScrollView
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.container}
      >
        <Text style={theme.text}>Clients Screen</Text>
        <Text style={theme.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text style={theme.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text style={theme.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text style={theme.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste unde
          necessitatibus enim, pariatur libero soluta ipsam animi laborum illum
          quam, maiores, possimus error. Numquam sapiente eius perferendis
          corrupti non ab!
        </Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "transparent",
  },
});

export default Clients;
