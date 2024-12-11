// Página exibida quando o usuário acessa uma rota que não existe
// Isto é útil para melhorar a experiência do usuário.

import { Text, View, StyleSheet, useColorScheme } from 'react-native';

export default function NotFound() {
  const theme = useColorScheme(); 
  const isDark = theme === 'dark';
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: isDark? '#121212': '#ffffff',
      minHeight: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    paragraph: {
      fontSize: 36,
      lineHeight: 24,
      color: isDark ? '#e0e0e0' : '#333333',
      textAlign: 'center', 
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Página não encontrada!</Text>
    </View>
  );
}
