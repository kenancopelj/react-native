import '../global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@/store';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate
          loading={
            <View className="flex-1 items-center justify-center bg-white">
              <ActivityIndicator size="large" color="#007AFF" />
            </View>
          }
          persistor={persistor}
        >
          <Stack screenOptions={{ headerShown: false }} />
          <StatusBar style="auto" />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}
