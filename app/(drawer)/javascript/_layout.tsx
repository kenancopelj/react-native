import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function JavaScriptLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "JavaScript",
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Stack.Screen
        name="prototypical-inheritance"
        options={{ title: "Prototypical Inheritance" }}
      />
      <Stack.Screen
        name="pass-by-value-reference"
        options={{ title: "Pass by Value / Reference" }}
      />
      <Stack.Screen
        name="object-configuration"
        options={{ title: "Object Configuration" }}
      />
      <Stack.Screen name="closures" options={{ title: "Closures & Scope" }} />
      <Stack.Screen
        name="chainable-methods"
        options={{ title: "Chainable Methods" }}
      />
      <Stack.Screen name="array-methods" options={{ title: "Array Methods" }} />
    </Stack>
  );
}
