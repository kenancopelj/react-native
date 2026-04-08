import { type ReactNode } from "react";
import {
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CodeBlock } from "./CodeBlock";

interface ExternalLink {
  label: string;
  url: string;
}

interface Props {
  explanation: string;
  code?: string;
  links?: ExternalLink[];
  children?: ReactNode;
}

export function LessonScreen({ explanation, code, links, children }: Props) {
  return (
    <ScrollView
      className="flex-1 bg-gray-50"
      contentContainerStyle={{ padding: 16 }}
    >
      <Text className="mb-2 text-base leading-6 text-gray-700">
        {explanation}
      </Text>

      {code && <CodeBlock code={code} />}

      {links && links.length > 0 && (
        <View className="mb-4 flex-row gap-3">
          {links.map((link) => (
            <TouchableOpacity
              key={link.label}
              className="flex-1 items-center rounded-lg bg-primary p-3"
              onPress={() => Linking.openURL(link.url)}
              activeOpacity={0.8}
            >
              <Text className="text-sm font-semibold text-white">
                {link.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {children}
    </ScrollView>
  );
}
