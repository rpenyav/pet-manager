import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import Clients from "../pages/Clients";
import CasesStudy from "../pages/CasesStudy";
import CalendarTurns from "../pages/CalendarTurns";
import Recordatorios from "../pages/Recordatorios";

import BottomNavigation from "../components/BottomNavigation";
import HeaderGlobal from "../components/HeaderGlobal";
import { RootStackParamList } from "../navigation/RootStackParamList";
import { forSlide, forFade, forSlideUpFade } from "../utils/transitions";
import MainContent from "../pages/MainContext";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleTabBarVisibility = (visible: boolean) => {
    setIsTabBarVisible(visible);
  };

  const toggleHeaderVisibility = (visible: boolean) => {
    setIsHeaderVisible(visible);
  };

  return (
    <NavigationContainer>
      <HeaderGlobal isVisible={isHeaderVisible} />
      <MainContent>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home">
            {() => (
              <HomeScreen
                toggleTabBarVisibility={toggleTabBarVisibility}
                toggleHeaderVisibility={toggleHeaderVisibility}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Clients">
            {() => (
              <Clients
                toggleTabBarVisibility={toggleTabBarVisibility}
                toggleHeaderVisibility={toggleHeaderVisibility}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="CasesStudy">
            {() => (
              <CasesStudy
                toggleTabBarVisibility={toggleTabBarVisibility}
                toggleHeaderVisibility={toggleHeaderVisibility}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="CalendarTurns">
            {() => (
              <CalendarTurns
                toggleTabBarVisibility={toggleTabBarVisibility}
                toggleHeaderVisibility={toggleHeaderVisibility}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Recordatorios">
            {() => (
              <Recordatorios
                toggleTabBarVisibility={toggleTabBarVisibility}
                toggleHeaderVisibility={toggleHeaderVisibility}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </MainContent>
      <BottomNavigation isVisible={isTabBarVisible} />
    </NavigationContainer>
  );
};

export default AppNavigator;
