import { View, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  type DrawerContentComponentProps,
} from "@react-navigation/drawer";

const DRAWER_ITEMS = [
  { name: "javascript", label: "JavaScript" },
  { name: "es6", label: "ES6" },
  { name: "react-native-course", label: "React Native" },
  { name: "expo-course", label: "Expo" },
] as const;

export function CustomDrawer(props: DrawerContentComponentProps) {
  const currentRoute = props.state.routes[props.state.index]?.name;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View className="bg-primary px-5 py-6">
        <Text className="text-xl font-bold text-white">RN course</Text>
      </View>

      {DRAWER_ITEMS.map((item) => {
        const isActive = currentRoute === item.name;
        return (
          <TouchableOpacity
            key={item.name}
            className={`border-b border-gray-100 px-5 py-4 ${isActive ? "bg-blue-50" : ""}`}
            onPress={() => props.navigation.navigate(item.name)}
          >
            <Text
              className={`text-base ${isActive ? "font-bold text-primary" : "font-medium text-gray-700"}`}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </DrawerContentScrollView>
  );
}
