import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/pages/home';
import inicio from './src/pages/principal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
      options={{
        headerShown: false,
      }}
      />
      <Stack.Screen name="inicio" component={inicio}
      options={{
        headerShown: false,
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
