import { Drawer } from "expo-router/drawer";
import { CustomDrawer } from "@/components/CustomDrawer";

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: { width: 280 },
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="javascript"
        options={{
          drawerLabel: "JavaScript",
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="es6"
        options={{
          drawerLabel: "ES6",
          title: "ES6",
        }}
      />
      <Drawer.Screen
        name="react-native-course"
        options={{
          drawerLabel: "React Native",
          title: "React Native",
        }}
      />
      <Drawer.Screen
        name="expo-course"
        options={{
          drawerLabel: "Expo",
          title: "Expo",
        }}
      />
    </Drawer>
  );
}
