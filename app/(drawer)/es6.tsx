import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ES6Screen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 px-8">
      <Ionicons name="construct-outline" size={64} color="#cccccc" />
      <Text className="mt-6 text-xl font-bold text-gray-800">ES6</Text>
      <Text className="mt-2 text-center text-base text-gray-500">
        Coming soon. Lessons on arrow functions, destructuring, modules, and more.
      </Text>
    </View>
  );
}
