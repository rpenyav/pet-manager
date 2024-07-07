import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import useScrollEffect from "../hooks/useScrollEffect";

interface CasesStudyProps {
  toggleTabBarVisibility: (visible: boolean) => void;
}

const CasesStudy: React.FC<CasesStudyProps> = ({ toggleTabBarVisibility }) => {
  const { handleScroll } = useScrollEffect(toggleTabBarVisibility);

  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      contentContainerStyle={styles.container}
    >
      <Text>Cases Study Screen</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorum,
        numquam similique alias vel facere! Eum, molestiae incidunt sint,
        minima, possimus odio dolorem distinctio sed error nobis laborum. Id,
        harum!
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

export default CasesStudy;
