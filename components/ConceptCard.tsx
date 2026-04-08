import { TouchableOpacity, Text, View } from 'react-native';

interface Props {
  title: string;
  done: boolean;
  onPress?: () => void;
}

export function ConceptCard({ title, done, onPress }: Props) {
  return (
    <TouchableOpacity
      className={`mb-2.5 flex-row items-center justify-between rounded-xl bg-white p-4 ${!done ? 'opacity-50' : ''}`}
      style={{ elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 4 }}
      onPress={onPress}
      activeOpacity={done ? 0.7 : 1}
      disabled={!done}
    >
      <Text className={`text-base font-semibold ${done ? 'text-gray-900' : 'text-gray-500'}`}>
        {title}
      </Text>
      <View>
        {done ? (
          <Text className="text-sm font-semibold text-primary">View →</Text>
        ) : (
          <Text className="text-xs italic text-gray-400">Coming soon</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
