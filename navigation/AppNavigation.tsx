import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import Clients from "../pages/Clients";
import CasesStudy from "../pages/CasesStudy";
import CalendarTurns from "../pages/CalendarTurns";
import Recordatorios from "../pages/Recordatorios";

import BottomNavigation from "../components/BottomNavigation";
import HeaderGlobal from "../components/HeaderGlobal";
import { useNavigationContext } from "../contexts/NavigationContext";
import { RootStackParamList } from "../navigation/RootStackParamList";
import { forSlide, forFade, forSlideUpFade } from "../utils/transitions";
import MainContent from "../pages/MainContext";

const Stack = createStackNavigator<RootStackParamList>();

const MainStack: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: forSlide, // Usar transición deslizante lateral
      }}
    />
    <Stack.Screen
      name="Clients"
      component={Clients}
      options={{
        headerShown: false,
        cardStyleInterpolator: forSlideUpFade, // Usar transición de abajo hacia arriba con desvanecimiento
      }}
    />
    <Stack.Screen
      name="CasesStudy"
      component={CasesStudy}
      options={{
        headerShown: false,
        cardStyleInterpolator: forFade, // Usar transición de desvanecimiento
      }}
    />
    <Stack.Screen
      name="CalendarTurns"
      component={CalendarTurns}
      options={{
        headerShown: false,
        cardStyleInterpolator: forFade, // Usar transición de desvanecimiento
      }}
    />
    <Stack.Screen
      name="Recordatorios"
      component={Recordatorios}
      options={{
        headerShown: false,
        cardStyleInterpolator: forSlideUpFade, // Usar transición de abajo hacia arriba con desvanecimiento
      }}
    />
    {/* Otras pantallas */}
  </Stack.Navigator>
);

const AppNavigator: React.FC = () => {
  const { scrollY } = useNavigationContext();

  return (
    <NavigationContainer>
      <HeaderGlobal />
      <MainContent>
        <MainStack />
      </MainContent>
      <BottomNavigation translateY={scrollY} />
    </NavigationContainer>
  );
};

export default AppNavigator;
