import { ScrollView, Text, View } from 'react-native';

interface Props {
  code: string;
}

export function CodeBlock({ code }: Props) {
  return (
    <View className="my-4 rounded-xl bg-gray-900 p-4">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text className="font-mono text-sm leading-relaxed text-green-400">{code}</Text>
      </ScrollView>
    </View>
  );
}
