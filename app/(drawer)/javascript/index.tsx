import { FlatList, View } from "react-native";
import { useRouter } from "expo-router";

import { ConceptCard } from "@/components/ConceptCard";
import { JS_CONCEPTS } from "@/constants/concepts";

export default function JavaScriptScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-50">
      <FlatList
        data={JS_CONCEPTS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <ConceptCard
            title={item.title}
            done={item.done}
            onPress={() => {
              if (item.done && item.route) {
                router.push(item.route as never);
              }
            }}
          />
        )}
      />
    </View>
  );
}
