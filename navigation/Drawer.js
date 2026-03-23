import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const items = [
  { name: "JavaScript", title: "JavaScript" },
  { name: "ES6", title: "ES6" },
  { name: "ReactNative", title: "React Native" },
  { name: "Expo", title: "Expo" },
];

export default function DrawerContent(props) {
  const currentRoute = props.state.routes[props.state.index]?.name;

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>RN course</Text>
      </View>
      {items.map((item) => {
        const isActive = currentRoute === item.name;
        return (
          <TouchableOpacity
            key={item.name}
            style={[styles.item, isActive && styles.activeItem]}
            onPress={() => props.navigation.navigate(item.name)}
          >
            <Text style={[styles.itemText, isActive && styles.activeItemText]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: "#007AFF",
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  activeItem: {
    backgroundColor: "#e8f4ff",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  activeItemText: {
    color: "#007AFF",
    fontWeight: "700",
  },
});
