import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./homeStack";
import SearchStack from "./searchStack";
import AccountStack from "./accountStack";

import { HomeContextProvider } from "../contexts/home";

const Tab = createBottomTabNavigator();

const icons = {
  Home: "md-home",
  Search: "md-search",
  Account: "md-person",
};

const createScreenOptions = ({ route }) => {
  const iconName = icons[route.name];
  return {
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function AppNavigator() {
  return (
    <HomeContextProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Account" component={AccountStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </HomeContextProvider>
  );
}
