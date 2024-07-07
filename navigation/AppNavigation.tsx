import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../pages/HomeScreen";
import Clients from "../pages/Clients";
import CasesStudy from "../pages/CasesStudy";
import CalendarTurns from "../pages/CalendarTurns";
import Recordatorios from "../pages/Recordatorios";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

import BottomNavigation from "../components/BottomNavigation";
import HeaderGlobal from "../components/HeaderGlobal";
import { RootStackParamList } from "../navigation/RootStackParamList";
import MainContent from "../pages/MainContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { View } from "react-native";

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

interface MainStackProps {
  toggleTabBarVisibility: (visible: boolean) => void;
  toggleHeaderVisibility: (visible: boolean) => void;
}

const MainStack: React.FC<MainStackProps> = ({
  toggleTabBarVisibility,
  toggleHeaderVisibility,
}) => (
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
);

interface DrawerNavigatorProps {
  toggleTabBarVisibility: (visible: boolean) => void;
  toggleHeaderVisibility: (visible: boolean) => void;
}

const DrawerNavigator: React.FC<DrawerNavigatorProps> = ({
  toggleTabBarVisibility,
  toggleHeaderVisibility,
}) => {
  return (
    <Drawer.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        drawerStyle: {
          zIndex: 2, // Asegura que el drawer esté encima
        },
      }}
    >
      <Drawer.Screen
        name="MainStack"
        options={{ title: "Home", headerShown: false, drawerLabel: () => null }}
      >
        {() => (
          <>
            <MainStack
              toggleTabBarVisibility={toggleTabBarVisibility}
              toggleHeaderVisibility={toggleHeaderVisibility}
            />
          </>
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

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
    <ThemeProvider>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <HeaderGlobal isVisible={isHeaderVisible} />
          <DrawerNavigator
            toggleTabBarVisibility={toggleTabBarVisibility}
            toggleHeaderVisibility={toggleHeaderVisibility}
          />
          <BottomNavigation isVisible={isTabBarVisible} />
        </View>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default AppNavigator;
