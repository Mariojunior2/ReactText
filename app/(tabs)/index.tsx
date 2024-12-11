// Página inicial da navegação em abas
// Esta é a aba padrão que será carregada primeiro.

import { Text, View } from 'react-native';

export default function TabIndex() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>Bem-vindo à Aba Principal!</Text>
    </View>
  );
}
