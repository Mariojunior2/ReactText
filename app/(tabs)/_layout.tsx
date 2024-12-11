import { ThemeProvider, useTheme } from '../../scripts/theme'; // Ajuste o caminho conforme necessário
import { Tabs } from 'expo-router';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'; // Importando novos ícones
import { Animated } from 'react-native'; // Importando Animated para animações

function TabsWithTheme() {
  const { theme } = useTheme(); // Acessa o tema global (claro ou escuro)
  const scaleValue = new Animated.Value(1); // Valor inicial da escala

  // Função para animar a escala do ícone com tipagem correta
  const animateScale = (toValue: number) => {
    Animated.timing(scaleValue, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Remove completamente o cabeçalho superior
        tabBarShowLabel: false, // Remove os nomes das abas
        tabBarStyle: {
          backgroundColor: theme.background, // Cor de fundo do menu inferior (tema)
          borderTopWidth: 0, // Remove a borda superior do menu inferior
        },
        tabBarHideOnKeyboard: true, // Oculta a barra de abas ao usar o teclado
      }}
    >
      {/* Configurando as abas */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}>
              <Ionicons name="home" color={color} size={size} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}>
              <MaterialIcons name="explore" color={color} size={size} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}>
              <FontAwesome name="comments" color={color} size={size} />
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="tutorial"
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Animated.View style={{ transform: [{ scale: focused ? 1.2 : 1 }] }}>
              <MaterialIcons name="school" color={color} size={size} />
            </Animated.View>
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
