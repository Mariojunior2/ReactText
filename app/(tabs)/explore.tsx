

import { Text, View, StyleSheet, useColorScheme } from 'react-native';

export default function ExploreTab() {
  const theme = useColorScheme(); 
  const isDark = theme === 'dark';


  const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: isDark ? '#121212' : '#ffffff',
      minHeight: '100%',
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
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
      <Text style={styles.paragraph}>Bem-vindo à Aba Explorar!</Text>
    </View>
  );
}
