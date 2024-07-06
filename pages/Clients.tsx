// Clients.tsx
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../navigation/RootStackParamList";
import { useNavigationContext } from "../contexts/NavigationContext";

type ClientsNavigationProp = StackNavigationProp<RootStackParamList, "Clients">;

type Props = {
  navigation: ClientsNavigationProp;
};

const Clients: React.FC<Props> = () => {
  const { scrollY } = useNavigationContext();

  return (
    <View style={styles.container}>
      <Text>Clients Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Clients;
