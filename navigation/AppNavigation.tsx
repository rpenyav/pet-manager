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

const MainStack: React.FC<{
  toggleTabBarVisibility: (visible: boolean) => void;
}> = ({ toggleTabBarVisibility }) => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="Home"
      options={{
        headerShown: false,
        cardStyleInterpolator: forSlide, // Usar transición deslizante lateral
      }}
    >
      {() => <HomeScreen toggleTabBarVisibility={toggleTabBarVisibility} />}
    </Stack.Screen>
    <Stack.Screen
      name="Clients"
      options={{
        headerShown: false,
        cardStyleInterpolator: forSlideUpFade, // Usar transición de abajo hacia arriba con desvanecimiento
      }}
    >
      {() => <Clients toggleTabBarVisibility={toggleTabBarVisibility} />}
    </Stack.Screen>
    <Stack.Screen
      name="CasesStudy"
      options={{
        headerShown: false,
        cardStyleInterpolator: forFade, // Usar transición de desvanecimiento
      }}
    >
      {() => <CasesStudy toggleTabBarVisibility={toggleTabBarVisibility} />}
    </Stack.Screen>
    <Stack.Screen
      name="CalendarTurns"
      options={{
        headerShown: false,
        cardStyleInterpolator: forFade, // Usar transición de desvanecimiento
      }}
    >
      {() => <CalendarTurns toggleTabBarVisibility={toggleTabBarVisibility} />}
    </Stack.Screen>
    <Stack.Screen
      name="Recordatorios"
      options={{
        headerShown: false,
        cardStyleInterpolator: forSlideUpFade, // Usar transición de abajo hacia arriba con desvanecimiento
      }}
    >
      {() => <Recordatorios toggleTabBarVisibility={toggleTabBarVisibility} />}
    </Stack.Screen>
    {/* Otras pantallas */}
  </Stack.Navigator>
);

const AppNavigator: React.FC = () => {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);

  const toggleTabBarVisibility = (visible: boolean) => {
    setIsTabBarVisible(visible);
  };

  return (
    <NavigationContainer>
      <HeaderGlobal />
      <MainContent>
        <MainStack toggleTabBarVisibility={toggleTabBarVisibility} />
      </MainContent>
      <BottomNavigation isVisible={isTabBarVisible} />
    </NavigationContainer>
  );
};

export default AppNavigator;
