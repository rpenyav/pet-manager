import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootStackParamList";
import BackgroundGlobal from "../components/BackgroundGlobal";
import { useNavigationContext } from "../contexts/NavigationContext";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { scrollY } = useNavigationContext();

  return (
    <View style={styles.container}>
      <BackgroundGlobal />
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContainer}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        {/* Repite este bloque de texto según sea necesario */}
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          odit omnis! Voluptatem praesentium quo deleniti, excepturi unde quia
          qui necessitatibus blanditiis maxime neque minima sint deserunt est
          expedita consectetur et?
        </Text>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  scrollContainer: {
    padding: 16,
    paddingTop: 0,
    margin: 0,
  },
});

export default HomeScreen;
