import { type ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  title: string;
  buttonLabel: string;
  onPress: () => void;
  result?: ReactNode;
  variant?: 'default' | 'danger';
  children?: ReactNode;
}

export function DemoSection({
  title,
  buttonLabel,
  onPress,
  result,
  variant = 'default',
  children,
}: Props) {
  return (
    <View
      className="mb-4 rounded-xl bg-white p-4"
      style={{ elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 4 }}
    >
      <Text className="mb-3 text-base font-semibold text-gray-800">{title}</Text>
      {children}
      <TouchableOpacity
        className={`items-center rounded-lg p-3 ${variant === 'danger' ? 'bg-danger' : 'bg-primary'}`}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text className="text-sm font-semibold text-white">{buttonLabel}</Text>
      </TouchableOpacity>
      {result}
    </View>
  );
}
