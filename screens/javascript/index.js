import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const concepts = [
  {
    id: "PrototypicalInheritance",
    title: "Prototypical Inheritance",
    done: true,
  },
  {
    id: "PassByValueReference",
    title: "Pass by Value / Reference",
    done: true,
  },
  { id: "ObjectConfiguration", title: "Object Configuration", done: true },
  { id: "Closures", title: "Closures & Scope", done: false },
  { id: "ChainableMethods", title: "Chainable Methods", done: false },
  { id: "ArrayMethods", title: "Array Methods", done: false },
  { id: "Currying", title: "Currying", done: false },
  { id: "EventLoop", title: "Event Loop", done: false },
  { id: "Iterators", title: "Iterators", done: false },
  { id: "ImmutableMutable", title: "Immutable vs Mutable Data", done: false },
  { id: "Hoisting", title: "Hoisting", done: false },
  { id: "IIFE", title: "IIFE", done: false },
  { id: "ShallowDeepCopy", title: "Shallow vs Deep Copy", done: false },
  { id: "HigherOrderFunctions", title: "Higher Order Functions", done: false },
  { id: "Recursion", title: "Recursion", done: false },
  { id: "Callbacks", title: "Callbacks", done: false },
  { id: "Memoization", title: "Memoization", done: false },
  { id: "RegExp", title: "RegExp", done: false },
  { id: "PureFunctions", title: "Pure Functions", done: false },
];

export default function JavaScript() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={concepts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, !item.done && styles.cardDisabled]}
            onPress={() => item.done && navigation.navigate(item.id)}
            activeOpacity={item.done ? 0.7 : 1}
          >
            <Text
              style={[styles.cardTitle, !item.done && styles.cardTitleDisabled]}
            >
              {item.title}
            </Text>
            {item.done ? (
              <Text style={styles.badge}>View →</Text>
            ) : (
              <Text style={styles.badgeSoon}>Coming soon</Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardDisabled: {
    opacity: 0.45,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  cardTitleDisabled: {
    color: "#555",
  },
  badge: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "600",
  },
  badgeSoon: {
    fontSize: 12,
    color: "#aaa",
    fontStyle: "italic",
  },
});
