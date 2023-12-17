import { createStackNavigator } from "@react-navigation/stack";
import React from "react"

import { Onboarding } from "../screens/Onboarding";
import { Home } from "../screens/Home";
import { Music } from "../screens/Music";

const Stack = createStackNavigator();

export function AppRoutes({}) {
  const options = { headerShown: false, gestureEnabled: false };

  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        options={options}
        component={Onboarding}
      />

      <Stack.Screen name="Home" options={options} component={Home} />
      <Stack.Screen name="Music" options={options} component={Music} />
    </Stack.Navigator>
  );
}
