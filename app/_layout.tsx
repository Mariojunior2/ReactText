import { ThemeProvider, useTheme } from '../scripts/theme'; // Ajuste o caminho conforme necessário
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

function TabsWithTheme() {
  const { theme } = useTheme(); // Acessa o tema global (claro ou escuro)

  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Remove completamente o cabeçalho superior
        tabBarShowLabel: false, // Remove os nomes das abas
        tabBarStyle: {
          backgroundColor: theme.background, // Cor de fundo do menu inferior (tema)
          borderTopWidth: 0, // Remove a borda superior do menu inferior
        },
      }}
    >
      {/* Configurando as abas */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <TabsWithTheme />
    </ThemeProvider>
  );
}
