import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'CVista' }} />
      <Stack.Screen name="analysis-result" options={{ title: 'Analiz Sonucu' }} />
    </Stack>
  );
}
