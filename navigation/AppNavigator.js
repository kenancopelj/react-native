import {
  createDrawerNavigator,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import CustomDrawer from "./Drawer";
import JavaScript from "../screens/javascript";
import PrototypicalInheritance from "../screens/javascript/PrototypicalInheritance";
import PassByValueReference from "../screens/javascript/PassByValueReference";
import ObjectConfiguration from "../screens/javascript/ObjectConfiguration";
import ES6 from "../screens/es6";
import ReactNative from "../screens/ReactNative";
import Expo from "../screens/Expo";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function JavaScriptStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JavaScriptHome"
        component={JavaScript}
        options={{
          title: "JavaScript",
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Stack.Screen
        name="PrototypicalInheritance"
        component={PrototypicalInheritance}
        options={{ title: "Prototypical Inheritance" }}
      />
      <Stack.Screen
        name="PassByValueReference"
        component={PassByValueReference}
        options={{ title: "Pass by Value / Reference" }}
      />
      <Stack.Screen
        name="ObjectConfiguration"
        component={ObjectConfiguration}
        options={{ title: "Object Configuration" }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ drawerStyle: { width: 280 } }}
    >
      <Drawer.Screen
        name="JavaScript"
        component={JavaScriptStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="ES6" component={ES6} options={{ title: "ES6" }} />
      <Drawer.Screen
        name="ReactNative"
        component={ReactNative}
        options={{ title: "React Native" }}
      />
      <Drawer.Screen name="Expo" component={Expo} options={{ title: "Expo" }} />
    </Drawer.Navigator>
  );
}
