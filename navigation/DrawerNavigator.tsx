import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/HomeScreen";
import Clients from "../pages/Clients";
import CasesStudy from "../pages/CasesStudy";
import CalendarTurns from "../pages/CalendarTurns";
import Recordatorios from "../pages/Recordatorios";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import { RootStackParamList } from "../navigation/RootStackParamList";
import MainContent from "../pages/MainContext";
import BottomNavigation from "../components/BottomNavigation";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();

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
    <Drawer.Navigator initialRouteName="MainStack">
      <Drawer.Screen
        name="MainStack"
        options={{ title: "Home", headerShown: false, drawerLabel: () => null }}
      >
        {() => (
          <MainStack
            toggleTabBarVisibility={toggleTabBarVisibility}
            toggleHeaderVisibility={toggleHeaderVisibility}
          />
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

export default DrawerNavigator;
