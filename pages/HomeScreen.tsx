import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootStackParamList";
import BackgroundGlobal from "../components/BackgroundGlobal";
import BottomNavigation from "../components/BottomNavigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const translateY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100],
    extrapolate: "clamp",
  });

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
      </Animated.ScrollView>
      <BottomNavigation translateY={translateY} />
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
  },
});

export default HomeScreen;
