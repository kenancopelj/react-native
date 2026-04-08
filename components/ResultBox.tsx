import { Colors } from "@/constants/colors";
import { Text, View } from "react-native";

interface Props {
  lines: string[];
  variant?: "default" | "danger";
}

export function ResultBox({ lines, variant = "default" }: Props) {
  return (
    <View
      className={`mt-3 rounded-r-lg p-3 ${variant === "danger" ? "bg-red-50" : "bg-blue-50"}`}
      style={{
        borderLeftWidth: 4,
        borderLeftColor: variant === "danger" ? Colors.danger : Colors.primary,
      }}
    >
      {lines.map((line, i) => (
        <Text key={i} className="font-mono text-sm leading-5 text-gray-800">
          {line}
        </Text>
      ))}
    </View>
  );
}
