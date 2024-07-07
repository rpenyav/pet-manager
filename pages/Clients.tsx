import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import useScrollEffect from "../hooks/useScrollEffect";
import useHeaderVisibility from "../hooks/useHeaderVisibility";

interface ClientsProps {
  toggleTabBarVisibility: (visible: boolean) => void;
  toggleHeaderVisibility: (visible: boolean) => void;
}

const Clients: React.FC<ClientsProps> = ({
  toggleTabBarVisibility,
  toggleHeaderVisibility,
}) => {
  const { handleScroll: handleTabBarScroll } = useScrollEffect(
    toggleTabBarVisibility
  );
  const { handleScroll: handleHeaderScroll } = useHeaderVisibility(
    toggleHeaderVisibility
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    handleTabBarScroll(event);
    handleHeaderScroll(event);
  };

  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      contentContainerStyle={styles.container}
    >
      <Text>Clients Screen</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        ratione vel amet odio ut magnam aut saepe, omnis dolorum inventore autem
        molestias maiores consectetur laudantium assumenda ullam atque suscipit!
        Adipisci!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});

export default Clients;
