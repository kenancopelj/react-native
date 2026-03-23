import { View, Text, StyleSheet } from "react-native";

export default function Expo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo</Text>
      <Text style={styles.subtitle}>Lessons coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#aaa",
  },
});
