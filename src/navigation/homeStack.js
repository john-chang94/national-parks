import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../features/home/homeScreen";
import ParkDetails from "../components/parkDetails";
import Browser from "../components/browser";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ParkDetails" component={ParkDetails} />
      <Stack.Screen
        name="BrowserScreen"
        component={Browser}
        options={{ headerShown: true, title: null }}
      />
    </Stack.Navigator>
  );
}
